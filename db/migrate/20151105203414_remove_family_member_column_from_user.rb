class RemoveFamilyMemberColumnFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :family_member_id
    remove_column :family_members, :gender
  end
end
