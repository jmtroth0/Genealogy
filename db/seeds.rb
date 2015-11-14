# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!({
  username: 'charlemagne', password: 'holy rome',
  fname: 'Charlemagne', lname: 'I'
})
charlemagne = user.family_members.first
pepin = user.family_members.create!({
  fname: 'Pepin', lname: 'the Short', generation: 1
})
bertrada = user.family_members.create!({
  fname: 'Bertrada', lname: 'of Laon', generation: 1
})
charlemagne.parent_a_id = pepin.id
charlemagne.parent_b_id = bertrada.id
charlemagne.save!
carloman = user.family_members.create!({
  fname: 'Carloman', lname: 'I',
  parent_a: pepin, parent_b: bertrada,
  generation: 0
})
martel = user.family_members.create!({
  fname: 'Charles', lname: 'Martel', generation: 2
})
rotrude = user.family_members.create!({
  fname: 'Rotrude', lname: 'of Trier', generation: 2
})
pepin.parent_a_id = martel.id
pepin.parent_b_id = rotrude.id
pepin.save!
hildegard = user.family_members.create!({
  fname: 'Hildegard', lname: 'the Great', generation: 0
})
hunch = user.family_members.create!({
  fname: 'Pepin', lname: 'the Hunchback',
  parent_a: charlemagne, parent_b: hildegard, generation: -1
})
junior = user.family_members.create!({
  fname: 'Charles', lname: 'the Younger',
  parent_a: charlemagne, parent_b: hildegard, generation: -1
})
louis = user.family_members.create!({
  fname: 'Louis', lname: 'the Pious',
  parent_a: charlemagne, parent_b: hildegard, generation: -1
})
lothair = user.family_members.create!({
  fname: 'Lothair', lname: 'I', parent_a: louis, generation: -2
})
