class Student < User
  belongs_to :section
  delegate :units, to: :section
end
