class Api::MonthlyBudgetsController < ApplicationController
  def index
    render json: Monthly_budget.all
  end

  def show
    monthly_budget = Monthly_budget.find(params[:id]) 

    render json: monthly_budget
  end

  def create
    monthly_budget = Monthly_budget.new(monthly_budget_params)
    if monthly_budget.save
      render json: monthly_budget
    else 
      render json: monthly_budget.errors, status: 422
    end
  end

  def update
    monthly_budget = Monthly_budget.find(params[:id])
    if monthly_budget.save
      render json: monthly_budget
    else 
      render json: monthly_budget.errors, status: 422
    end

    def destroy 
    render json: Monthly_budget.find(params[:id]).destroy 
    end
  end


  private

  def monthly_budget_params 
    params.require(:monthly_budget).permit(:month, :year, :user_id)
  end
end
