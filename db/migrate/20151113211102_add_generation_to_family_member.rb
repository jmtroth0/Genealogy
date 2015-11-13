class AddGenerationToFamilyMember < ActiveRecord::Migration
  def change
    add_column :family_members, :generation, :integer
  end
end
