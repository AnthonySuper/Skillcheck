class UserSkillSerializer < ActiveModel::Serializer
  attributes :id, 
    :description, 
    :stat,
    :user_id,
    :skill_id

  belongs_to :user
  belongs_to :skill
end
