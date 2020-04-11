class AddBodyToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :body, :string
    add_column :cars, :modelyear, :string
  end
end
