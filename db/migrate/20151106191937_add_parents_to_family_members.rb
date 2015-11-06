class AddParentsToFamilyMembers < ActiveRecord::Migration
  def change
    add_reference :family_members, :parentA
    add_reference :family_members, :parentB
  end
end
