json.extract! @user, :id, :username, :name

json.family_members do
  json.array! @family do |person|
    json.partial! 'api/family_members/family_member', family_member: person
  end
end
