class Photo < ActiveRecord::Base
  validates :uploader_id, presence: true
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :uploader,
    class_name: 'User'
end
