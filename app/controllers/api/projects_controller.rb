class Api::ProjectsController < ApplicationController
    skip_before_action :authorized, only: [:show, :index]

    def index
        render json: Project.all, status: :ok
    end

    def show
        p = Project.find_by(id: params[:id])
        render json: p, status: :ok
    end
end
