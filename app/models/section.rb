class Section < ActiveRecord::Base
  validates :year, :teacher, presence: true

  belongs_to :teacher
  has_many :students
  has_many :units
  # has_many :submissions, through: :units, source: :submissions
end
