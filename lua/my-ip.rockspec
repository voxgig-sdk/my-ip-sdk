package = "voxgig-sdk-my-ip"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/my-ip-sdk.git"
}
description = {
  summary = "MyIp SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["my-ip_sdk"] = "my-ip_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
