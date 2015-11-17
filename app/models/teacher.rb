class Teacher < User
  has_many :sections
  has_many :units, through: :sections, source: :units
  has_many :students, through: :sections, source: :students
end
