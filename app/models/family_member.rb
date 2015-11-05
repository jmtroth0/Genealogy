class FamilyMember < ActiveRecord::Base
  validates :fname, :lname, presence: true

  belongs_to :user

  def name
    "#{fname} #{lname}"
  end
end
