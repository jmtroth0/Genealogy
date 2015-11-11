class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.attachment :file
      t.string :title
      t.integer :uploader_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
