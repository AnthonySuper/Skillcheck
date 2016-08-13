class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :user_skills
  has_many :users
end
