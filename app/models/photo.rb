class Photo < ActiveRecord::Base
  validates :uploader_id, presence: true
  has_attached_file :image, styles: { thumbnail: "200x400" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_destroy :cleanup

  belongs_to :uploader, class_name: 'User'

  has_many :submission_uploads, as: :upload
  has_many :submissions, through: :submission_uploads, source: :submissions

  def cleanup
    self.submission_uploads.destroy_all
  end
end
