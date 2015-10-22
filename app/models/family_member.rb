class FamilyMember < ActiveRecord::Base
  validates :fname, :lname, :gender, presence: true

  belongs_to :user
end
