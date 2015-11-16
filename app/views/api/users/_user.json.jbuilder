json.extract! user, :id, :email, :name, :type
json.section do
  json.extract! user.section, :id, :name, :year
end
# also add units later
