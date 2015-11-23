class Photo < ActiveRecord::Base
  validates :uploader_id, presence: true
  has_attached_file :image, styles: { thumbnail: "200x400" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :uploader, class_name: 'User'

  has_many :submission_uploads, dependent: :destroy
  has_many :submissions, through: :submission_uploads, source: :submissions
end
