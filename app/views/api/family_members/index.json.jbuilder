json.array! @family_members do |person|
  json.partial! 'family_member', family_member: person
end
