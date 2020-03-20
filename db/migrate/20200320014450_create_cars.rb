class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :kind
      t.string :color
      t.float :price

      t.timestamps
    end
  end
end
