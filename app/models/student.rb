class Student < User
  belongs_to :section
  delegate :units, to: :section
  has_many :submissions, foreign_key: :user_id
end
