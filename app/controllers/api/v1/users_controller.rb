class Api::V1::UsersController < ApplicationController
    include ActiveModel::Serialization
    skip_before_action :authorized, only: [:create, :index, :me]

    # def show
    #     current_user = User.find(session[:user_id])
    #     render json: current_user
    # end

    def index
        render json: User.all
    end

    def me
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :bio, :avatar)
    end
end
