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
      member = User.first.family_members.new()
      member.save
      expect(member.errors.full_messages).to include("Fname can't be blank")
    end
  end

  describe "Parental associations" do
    before do
      u = User.create!(username: "Hello", password: ", World")
      a = u.family_members.create!(
        fname: "Mars",
        lname: "Bars",
      )
      b = u.family_members.create!(
        fname: "Snickers",
        lname: "Bar",
      )
      u.family_members.create!(
        fname: "Three",
        lname: "Musketeers",
        parent_a: a,
        parent_b: b,
      )
    end

    it "sets parents through the association" do
      person = FamilyMember.find_by(fname: "Three")
      expect(person.parent_a.name).to eq("Mars Bars")
      expect(person.parent_b.name).to eq("Snickers Bar")
    end

    it "gets the children as the reverse of the association" do
      person = FamilyMember.find_by(fname: "Mars")
      expect(person.children.first.name).to eq("Three Musketeers")
    end
  end
end
