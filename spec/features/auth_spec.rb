require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  it "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  feature "signing up a user" do
    before(:each) { visit new_user_url }

    it "validates email presence" do

      click_button 'Sign Up'
      expect(page).to have_content "Email can't be blank"
    end

    it "validates password length >= 6" do
      fill_in 'Email', with: 'testing_email'
      click_button 'Sign Up'
      expect(page).to have_content 'Password is too short (minimum is 6 characters)'
    end
  end
end

feature "logging in" do
  before do
    sign_up_as_testing_email
    sign_out
  end

  it "displays error if invalid email/password" do
    visit new_session_url
    fill_in 'Email', with: 'wrong_email'
    fill_in 'Password', with: 'wrong_password'
    click_button 'Sign In'
    expect(page).to have_content 'Invalid email and/or Password'
  end

end

feature "logging out" do

  it "begins with logged out state" do
    visit new_user_url
    expect(page).to have_content 'Sign Up'
  end

  it "doesn't show email on the homepage after logout" do
    sign_up_as_testing_email
    sign_out
    expect(page).not_to have_content 'testing_email'
  end

end
