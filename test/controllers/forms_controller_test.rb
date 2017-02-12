require 'test_helper'

class FormsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get forms_index_url
    assert_response :success
  end

  test "should get form_send" do
    get forms_form_send_url
    assert_response :success
  end

end
