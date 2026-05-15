# MyIp SDK exists test

require "minitest/autorun"
require_relative "../MyIp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MyIpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
