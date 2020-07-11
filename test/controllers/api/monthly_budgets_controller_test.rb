require 'test_helper'

class Api::MonthlyBudgetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_monthly_budgets_index_url
    assert_response :success
  end

  test "should get update" do
    get api_monthly_budgets_update_url
    assert_response :success
  end

end
