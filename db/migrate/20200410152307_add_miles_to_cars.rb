class AddMilesToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :miles, :int
    add_column :cars, :transmission, :string
    add_column :cars, :drivetrain, :string
    add_column :cars, :vin, :string
    add_column :cars, :doors, :int
    add_column :cars, :engine, :string
    add_column :cars, :display, :boolean
  end
end
