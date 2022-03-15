# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Destroying seeds..."

Project.destroy_all

puts "Seeding projects..."

slippy = Project.create({name: "Slippy", description: "Digital pet/simulation game that controls the life of a sleepy slime", github: "https://github.com/SirDigo/Phase-2-New-Slippy-Project", demo: "https://vimeo.com/663749840", image: "https://raw.githubusercontent.com/SirDigo/Phase-2-New-Slippy-Project/main/src/images/IdleBedroom.gif"})
kbWeather = Project.create({name: "Kate Bush Weather", description: "Location-based weather app that recommends Kate Bush albums", github: "https://github.com/defnecelikoyar/kb-weather", demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: "https://i.ibb.co/twf9nrz/Screen-Shot-2022-03-08-at-6-24-24-PM.png"})

puts "Done seeding!"