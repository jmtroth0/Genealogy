require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  it "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  feature "signing up a user" do
    before(:each) { visit new_user_url }

    it "validates username presence" do

      click_button 'Sign Up'
      expect(page).to have_content "Username can't be blank"
    end

    it "validates password length >= 6" do
      fill_in 'Username', with: 'testing_username'
      click_button 'Sign Up'
      expect(page).to have_content 'Password is too short (minimum is 6 characters)'
    end
  end
end

feature "logging in" do
  before do
    sign_up_as_testing_username
    sign_out
  end

  it "displays error if invalid username/password" do
    visit new_session_url
    fill_in 'Username', with: 'wrong_username'
    fill_in 'Password', with: 'wrong_password'
    click_button 'Sign In'
    expect(page).to have_content 'Invalid Username and/or Password'
  end

end

feature "logging out" do

  it "begins with logged out state" do
    visit new_user_url
    expect(page).to have_content 'Sign Up'
  end

  it "doesn't show username on the homepage after logout" do
    sign_up_as_testing_username
    sign_out
    expect(page).not_to have_content 'testing_username'
  end

end
