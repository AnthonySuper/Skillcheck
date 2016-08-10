class ApplicationSerializer < ActiveModel::Serializer
  attribute :type_name

  def type_name
    object.class.to_s
  end
end
