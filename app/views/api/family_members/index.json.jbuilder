json.array! @family_members do |person|
  json.extract! person, :name
end
