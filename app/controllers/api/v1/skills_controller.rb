class Api::V1::SkillsController < ApplicationController
  before_action :load_skill, except: [:index, :create]

  def show
    render json: @skill, include: params[:include]
  end

  def index
    @skills = Skill.all
      .includes(:user_skills)
      .includes(:users)
    render json: @skills
  end

  def create
    @skill = Skill.new(skill_params)
    if @skill.save
      render json: @skill
    else
      render json: {errors: @skill.errors}, status: 401
    end
  end

  def update
    if @skill.update(skill_params)
      render json: @skill
    else
      render json: {errors: @skill.errors}, status: 401
    end
  end

  protected

  def load_skill
    @skill = Skill.find(params[:id])
  end

  def skill_params
    params.require(:skill)
      .permit(:name, :description)
  end
end
