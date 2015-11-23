class Document < ActiveRecord::Base
  validates :uploader_id, presence: true
  has_attached_file :file, styles: { pdf_thumb: ["200x200", :png] }
  validates_attachment_content_type :file, content_type: /\w*\/pdf/

  after_destroy :cleanup

  belongs_to :uploader, class_name: 'User'

  has_many :submission_uploads, as: :upload
  has_many :submissions, through: :submission_uploads, source: :submissions

  def cleanup
    self.submission_uploads.destroy_all
  end
end
