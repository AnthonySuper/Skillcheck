class CreateUserSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :user_skills do |t|
      t.references :user, foreign_key: true
      t.references :skill, foreign_key: true
      t.integer :stat, null: false, default: 0
      t.text :description, null: false, default: ""
      t.timestamps
    end
  end
end
