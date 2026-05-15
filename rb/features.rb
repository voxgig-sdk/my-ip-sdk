# MyIp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MyIpFeatures
  def self.make_feature(name)
    case name
    when "base"
      MyIpBaseFeature.new
    when "test"
      MyIpTestFeature.new
    else
      MyIpBaseFeature.new
    end
  end
end
