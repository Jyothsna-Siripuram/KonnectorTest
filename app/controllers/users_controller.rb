class UsersController < ApplicationController
  def index
    @users = User.all
    if @users&.present?
        render json: {users: @users, message: "Users found!", status: :success}
    else
        render json: {users: @users, status: :not_found}
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
        render json: {user: @user, message: "User created!", status: :created}
    else
        render json: {users: @user.errors.full_messages.join(','), message: "User creation failed!", status: :unprocessable_entity}
    end
  end

  def filter
    campaign_names = params[:campaign_names].split(',')
    @users = User.where("JSON_CONTAINS(campaigns_list, ?)", campaign_names.map { |name| { campaign_name: name }.to_json }.to_json)
    if @users&.present?
        render json: {users: @users, message: "Users found!", status: :success}
    else
        render json: {users: @users, status: :not_found}
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, campaigns_list: [])
  end
end
