-- MyIp SDK error

local MyIpError = {}
MyIpError.__index = MyIpError


function MyIpError.new(code, msg, ctx)
  local self = setmetatable({}, MyIpError)
  self.is_sdk_error = true
  self.sdk = "MyIp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MyIpError:error()
  return self.msg
end


function MyIpError:__tostring()
  return self.msg
end


return MyIpError
