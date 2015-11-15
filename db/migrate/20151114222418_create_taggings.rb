class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :family_member_id, null: false
      t.string :taggable_type
      t.integer :taggable_id

      t.timestamps null: false
    end

    add_index :taggings, [:taggable_type, :taggable_id]
    add_index :taggings, :family_member_id
  end
end
