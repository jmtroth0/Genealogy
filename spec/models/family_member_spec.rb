require 'rails_helper'

RSpec.describe FamilyMember, type: :model do

  describe "FamilyMember Create" do
    before do
      User.create!(
        username: "testing",
        password: 123456,
        fname: "Johnnie",
        lname: "Walker"
      )
    end

    it "auto create entry on sign up" do
      expect("#{FamilyMember.first.fname} #{FamilyMember.first.lname}").to eq("Johnnie Walker")
    end

    it "validates name" do
      member = User.first.family_members.new(gender: "M")
      member.save
      expect(member.errors.full_messages).to include("Fname can't be blank")
    end
  end
end
