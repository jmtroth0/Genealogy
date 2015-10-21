class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minumum: 6, :allow_nil }

  def self.find_by_credentials(username, password)

  end

  def password=(password)
    
  end
end
