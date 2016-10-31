class Api::V1::ProjectsController < ApplicationController
  before_action :load_project, only: [:show, :update]

  def index
    @projects = Project.all
    render json: @projects
  end

  def show
    render json: @project
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors, status: 401
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: 401
    end
  end

  protected

  def projcet_params
    params.require(:project)
      .permit(:name, :description)
  end

  def load_project
    @project = Project.find(params[:id])
  end
end
