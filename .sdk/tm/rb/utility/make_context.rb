# MyIp SDK utility: make_context
require_relative '../core/context'
module MyIpUtilities
  MakeContext = ->(ctxmap, basectx) {
    MyIpContext.new(ctxmap, basectx)
  }
end
