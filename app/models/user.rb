class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_family_member_entry

  has_many :family_members, dependent: :destroy

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)

    @user && @user.is_password?(password) ? @user : nil
  end

  def name
    "#{self.fname} #{self.lname}"
  end

  def create_family_member_entry
    personal = self.family_members.create!(fname: self.fname, lname: self.lname)
  end

# password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

# session token
  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16);
  end
end
