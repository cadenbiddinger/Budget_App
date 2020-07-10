class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.float :housing
      t.float :insurance
      t.float :utilities
      t.float :retirement
      t.float :auto
      t.float :savings
      t.float :food
      t.float :entertainment
      t.float :phone
      t.float :misc
      t.belongs_to :monthly_budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
