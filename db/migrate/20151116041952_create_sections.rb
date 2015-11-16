class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.integer :year, null: false
      t.string :name
      t.integer :teacher_id, null: false

      t.timestamps null: false
    end

    add_index :sections, :teacher_id
    add_index :sections, :name, unique: true
  end
end
