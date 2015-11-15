json.extract! family_member,
  :id, :name, :lname, :fname, :parent_b_id, :parent_a_id, :generation

json.taggings do
  json.array! family_member.taggables do |taggable|
    json.partial! 'taggings/tagging', tagging: tagging
  end
end
