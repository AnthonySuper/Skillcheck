class MakeSkillDescriptionNonNull < ActiveRecord::Migration[5.0]
  def change
    change_column :skills, :description, :text, null: false, default: ""
  end
end
