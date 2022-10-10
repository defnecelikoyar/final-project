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
flatspace = Project.create({name: "Flatspace", description: "Alternative social media platform independent of tech conglomerates", github: "https://github.com/SirDigo/phase-4-project-flatspace/tree/defnee", demo: "https://vimeo.com/758136366", image: "https://github.com/defnecelikoyar/final-project/blob/main/client/public/flatspace_screenshot.png?raw=true"})
istanpaulo = Project.create({name: "Istanpaulo Online Arthouse", description: "Online gallery featuring works by Brazilian and Turkish artists", github: "https://github.com/defnecelikoyar/istanpaulo", demo: "https://vimeo.com/692624295", image:"https://github.com/defnecelikoyar/defnecelikoyar/blob/main/Screen%20Shot%202022-03-28%20at%206.36.50%20PM.png?raw=true"})
kbWeather = Project.create({name: "Kate Bush Weather", description: "Location-based weather app that recommends Kate Bush albums", github: "https://github.com/defnecelikoyar/kb-weather", demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: "https://github.com/defnecelikoyar/kb-weather/blob/main/Screen%20Shot%202022-03-08%20at%206.24.24%20PM.png?raw=true"})

puts "Done seeding!"