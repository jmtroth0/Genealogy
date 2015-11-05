json.extract! @user, :username

json.family_members do
  json.array! @user.family_members do |person|
    json.partial! 'api/family_members/family_member', family_member: person
  end
end
