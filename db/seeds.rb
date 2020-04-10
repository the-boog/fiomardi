display=[true, false]

10.times do
  Car.create(
    make: Faker::Vehicle.make,
    kind: Faker::Vehicle.model,
    color: Faker::Color.color_name,
    price: Faker::Commerce.price.to_f,
    display: display.sample,
    vin: Faker::Number.hexadecimal(digits: 18),
    doors: rand(2..6),
    engine: "3.8L V6 OHV 12V",
    transmission: Faker::Vehicle.transmission,
    miles: Faker::Vehicle.mileage(min: 50_000, max: 250_000),
    drivetrain: Faker::Vehicle.drive_type,
    
  )
end

puts "10 Cars Seeded"