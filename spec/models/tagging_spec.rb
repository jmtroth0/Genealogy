require 'rails_helper'

RSpec.describe Tagging, type: :model do
  before do
    @user = User.create!(username: "LChaim", password: "Password")
    sign_in(@user)
    @photos = [ @user.photos.create, @user.photos.create, @user.photos.create ]
    @photos[0].tag(FamilyMember.first);
  end

  pending "tags successfully"
end
