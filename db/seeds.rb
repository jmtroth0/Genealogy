# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!({username: 'mbars', password: 'password', fname: 'Oranos', lname: 'Marx'})
oranos = user.family_members.first
gaia = user.family_members.create!({fname: 'Gaia', lname: 'Hayek'})
rhea = user.family_members.create!({
  fname: 'Rhea', lname: 'Hayek', parent_a: oranos, parent_b: gaia
})
kronos = user.family_members.create!({
  fname: 'Kronos', lname: 'Marx', parent_a: oranos, parent_b: gaia
})
hyperion = user.family_members.create!({
  fname: 'Hyperion', lname: 'Marx', parent_a: oranos, parent_b: gaia
})
zeus = user.family_members.create!({
  fname: 'Zeus', lname: 'Marx', parent_a: kronos, parent_b: rhea
})
hera = user.family_members.create!({
  fname: 'Hera', lname: 'Hayek', parent_a: kronos, parent_b: rhea
})
athena = user.family_members.create!({
  fname: 'Athena', lname: 'Hayek', parent_a: zeus
})
ares = user.family_members.create!({
  fname: 'Ares', lname: 'Marx', parent_a: zeus, parent_b: hera
})
