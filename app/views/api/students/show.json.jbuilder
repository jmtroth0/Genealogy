json.extract! @user, :email, :fname, :lname, :type

if @section
  json.section do
    json.partial! 'api/sections/section', section: @section
  end
end
