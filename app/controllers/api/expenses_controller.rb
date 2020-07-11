class Api::ExpensesController < ApplicationController
  before_action :set_monthly_budget, only: [:index, :create, :update, :destroy]
  
  def index
    render json: @monthly_budget.expenses
  end

  def create
    expenses = monthly_budget.expenses.new(expense_params)
      if expense.save
        render json: expense
      else 
        render json: {errors: expense.errors}, status: :unprocessible_entity
      end
  end

  def update
    expense = @monthly_budget.expenses.find(params[:id])
    if expense.update(expense_params)
      render json: expense
    else 
      render json: {errors: expense.errors}, status: :unprocessible_entity
    end
  end

  def destroy 
    render json: @monthly_budget.expenses.find(params[:id]).destroy 
  end


  private

  def set_monthly_budget
    @monthly_budget = Monthly_budget.find(params[:monthly_budget_id])
  end

  def expense_params
  params.require(:expense).permit(:housing, :insurance, 
    :utilities, :retirement, :auto, :savings, 
    :food, :entertainment, :phone, :misc, :monthly_budget_id)
  end
end

