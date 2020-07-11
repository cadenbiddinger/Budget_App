require 'test_helper'

class Api::ExpensesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_expenses_index_url
    assert_response :success
  end

  test "should get update" do
    get api_expenses_update_url
    assert_response :success
  end

end
