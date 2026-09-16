# MyIp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MyIpFeatures
  def self.make_feature(name)
    case name
    when "base"
      MyIpBaseFeature.new
    when "ratelimit"
      MyIpRatelimitFeature.new
    when "retry"
      MyIpRetryFeature.new
    when "test"
      MyIpTestFeature.new
    when "timeout"
      MyIpTimeoutFeature.new
    else
      MyIpBaseFeature.new
    end
  end
end
