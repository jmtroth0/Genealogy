class CreateFamilyMembers < ActiveRecord::Migration
  def change
    create_table :family_members do |t|
      t.integer :fname, null: false
      t.integer :lname, null: false
      t.string :gender, null: false, default: "other"
      t.integer :user_id, null: false

      t.timestamps
    end
    
    add_index :family_members, :user_id

    add_column :users, :family_member_id, :integer, null: false
    add_index :users, :family_member_id
  end
end
