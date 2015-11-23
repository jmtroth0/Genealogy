class Submission < ActiveRecord::Base
  validates :user, :unit, presence: true

  belongs_to :user
  belongs_to :unit
  has_many :submission_uploads, class_name: 'SubmissionUpload', dependent: :destroy
  has_many :photos,
    through: :submission_uploads,
    source: :upload,
    source_type: 'Photo'
  has_many :documents,
    through: :submission_uploads,
    source: :upload,
    source_type: 'Document'
end
