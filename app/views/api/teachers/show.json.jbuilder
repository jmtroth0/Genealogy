json.extract! @user, :email, :fname, :lname, :type

json.sections do
  json.array! @sections do |section|
    json.partial! 'api/sections/section', section: section
  end
end
