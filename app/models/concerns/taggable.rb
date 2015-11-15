module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :taggings, as: :taggable, dependent: :destroy
    has_many :tagged_person, through: :taggings, source: :family_member
  end

  def tag(person)
    self.taggings.create!(tagged_person: person)
  end
end
