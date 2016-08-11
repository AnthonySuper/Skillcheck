class Api::V1::UserSkillsController < ApiController
  before_action :load_user_skill, except: [:index, :create]

  def index
    render json: UserSkill.all
  end

  def show
    render json: @user_skill
  end

  def create
    @user_skill = UserSkill.new(user_skill_params)
    authorize @user_skill
    if @user_skill.save
      render json: @user_skill
    else
      render json: { errors: @user_skill.errors }, status: 401
    end
  end


  protected
  def load_user_skill
    @user_skill = UserSkill.find(params[:id])
  end

  def user_skill_params
    params.require(:user_skill)
      .permit(:user_id, 
              :skill_id, 
              :stat,
              :description)
  end
end
