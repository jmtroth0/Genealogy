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
pepin = user.family_members.create!({fname: 'Pepin', lname: 'the Short'})
bertrada = user.family_members.create!({fname: 'Bertrada', lname: 'of Laon'})
charlemagne.parent_a = pepin
charlemagne.parent_b = bertrada
carloman = user.family_members.create!({
  fname: 'Carloman', lname: 'I', parent_a: pepin, parent_b: bertrada
})
martel = user.family_members.create!({ fname: 'Charles', lname: 'Martel' })
rotrude = user.family_members.create!({ fname: 'Rotrude', lname: 'of Trier' })
pepin.parent_a = martel
pepin.parent_b = rotrude
hildegard = user.family_members.create!({ fname: 'Hildegard', lname: 'the Great' })
hunch = user.family_members.create!({
  fname: 'Pepin', lname: 'the Hunchback', parent_a: charlemagne, parent_b: hildegard
})
junior = user.family_members.create!({
  fname: 'Charles', lname: 'the Younger', parent_a: charlemagne, parent_b: hildegard
})
louis = user.family_members.create!({
  fname: 'Louis', lname: 'the Pious', parent_a: charlemagne, parent_b: hildegard
})
lothair = user.family_members.create!({
  fname: 'Lothair', lname: 'I', parent_a: louis
})
