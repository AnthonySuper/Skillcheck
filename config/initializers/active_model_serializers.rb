ActiveModelSerializers.config.tap do |config|
  config.key_transform = :camel_lower
  config.adapter = :json_api
end
