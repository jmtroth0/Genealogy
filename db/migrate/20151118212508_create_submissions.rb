class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string :title
      t.text :description
      t.integer :user_id, null: false, index: true
      t.integer :unit_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
