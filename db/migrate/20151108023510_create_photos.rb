class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.attachment :image
      t.string :title
      t.integer :uploader_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
