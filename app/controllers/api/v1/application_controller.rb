class Api::V1::ApplicationController < ActionController::API
  include Pundit
  include DeviseTokenAuth::Concerns::SetUserByToken

  protected

  def pundit_user
    current_api_v1_user
  end
end
