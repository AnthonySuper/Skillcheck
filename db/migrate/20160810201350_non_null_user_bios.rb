class NonNullUserBios < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :bio, :text, null: false,
      default: ""
  end
end
