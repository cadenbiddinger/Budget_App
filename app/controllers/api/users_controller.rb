class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email
    user.income = params[:income] ? params[:income] : user.income
    user.balance = params[:balance] ? params[:balance] : user.balance
    debugger
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end
end
