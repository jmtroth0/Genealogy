class AddParentsToFamilyMembers < ActiveRecord::Migration
  def change
    add_reference :family_members, :parent_a
    add_reference :family_members, :parent_b
  end
end
