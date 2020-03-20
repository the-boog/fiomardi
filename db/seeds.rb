20.times do
  Car.create(
    make: Faker::Vehicle.make,
    kind: Faker::Vehicle.model,
    color: Faker::Color.color_name,
    price: Faker::Commerce.price.to_f
  )
end

puts "20 Cars Seeded"