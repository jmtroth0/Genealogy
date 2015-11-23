class SubmissionUpload < ActiveRecord::Base
  validates :submission, :upload, presence: true

  belongs_to :submission
  belongs_to :upload, polymorphic: true
end
