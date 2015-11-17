class Unit < ActiveRecord::Base
  validates :name, :section_id, presence: true

  belongs_to :section
  has_one :teacher, through: :section, source: :teacher
  has_many :students, through: :section, source: :students
end
