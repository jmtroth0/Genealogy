class CreateSubmissionUploads < ActiveRecord::Migration
  def change
    create_table :submission_uploads do |t|
      t.integer :submission_id, null: false
      t.references :upload, null: false, polymorphic: true

      t.timestamps null: false
    end

    add_index :submission_uploads, [:submission_id, :upload_type, :upload_id],
      name: 'index_submission_uploads_on_submission_id_and_upload'
  end
end
