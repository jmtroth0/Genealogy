require 'rails_helper'

RSpec.describe Photo, type: :model do
  # before do
  #   extend ActionDispatch::TestProcess
  #   @user = User.create!(username: "LChaim", password: "Password")
  #   @photo = @user.photos.new(title: "Kitty")
  #   @photo.image = sample_photo
  #   @photo.save!
  # end
  #
  # it "saves successfully" do
  #   photo = Photo.find(1)
  #   expect(photo).to eq(@photo)
  # end
  #
  # it "takes an image as an attachment" do
  #   expect(@photo.image_file_name).to eq("kitty.jpg")
  #   expect(@photo.image_content_type).to match(/\Aimage\/.*\Z/)
  # end
  #
  # it "should have an attachment :path of :rails_root/path/:basename.:extension" do
  #   expect(Paperclip::Attachment.default_options[:url]).to eq(":rails_root/path/:basename.:extension")
  # end
end
