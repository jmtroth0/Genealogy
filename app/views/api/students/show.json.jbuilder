json.extract! @user, :email, :fname, :lname, :type

json.section do
  json.partial! 'api/sections/section', section: @section, units: @units
end
