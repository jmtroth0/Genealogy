class Submission < ActiveRecord::Base
  validates :user, :unit, presence: true

  belongs_to :user
  belongs_to :unit
  has_many :submission_uploads, class_name: 'SubmissionUploads'
  has_many :uploads, through: :submission_uploads, source: :uploads
end
