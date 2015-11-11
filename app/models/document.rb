class Document < ActiveRecord::Base
  validates :uploader_id, presence: true
  has_attached_file :file, styles: { pdf_thumb: ["200x200", :png] }
  validates_attachment_content_type :file, content_type: /\w*\/pdf/

  belongs_to :uploader,
    class_name: 'User'
end
