class Api::V1::UsersController < ApplicationController
  before_action :set_user, except: [:create, :index]

  def index
    render json: User.all
  end

  def show
    render json: @user, include: [:user_skills, :skills]
  end

  protected

  def set_user
    @user = User.find(params[:id])
  end

end
