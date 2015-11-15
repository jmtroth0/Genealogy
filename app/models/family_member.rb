class FamilyMember < ActiveRecord::Base
  validates :fname, :lname, presence: true

  belongs_to :user

  belongs_to :parent_a, class_name: 'FamilyMember', foreign_key: :parent_a_id
  belongs_to :parent_b, class_name: 'FamilyMember', foreign_key: :parent_b_id

  has_many :taggings, dependent: :destroy
  has_many :taggables, through: :taggings, source: :taggable

  def name
    "#{fname} #{lname}"
  end

  def children
    self.class.where("parent_a_id=:id OR parent_b_id=:id", id: self.id)
  end
end
