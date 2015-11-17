class CreateUnits < ActiveRecord::Migration
  def change
    create_table :units do |t|
      t.string :name, null: false
      t.text :description
      t.integer :section_id, null: false

      t.timestamps null: false
    end

    add_index :units, :section_id
  end
end
