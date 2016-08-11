class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio
  has_many :user_skills
  has_many :skills
end
