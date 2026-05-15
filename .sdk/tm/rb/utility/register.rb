# MyIp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MyIpUtility.registrar = ->(u) {
  u.clean = MyIpUtilities::Clean
  u.done = MyIpUtilities::Done
  u.make_error = MyIpUtilities::MakeError
  u.feature_add = MyIpUtilities::FeatureAdd
  u.feature_hook = MyIpUtilities::FeatureHook
  u.feature_init = MyIpUtilities::FeatureInit
  u.fetcher = MyIpUtilities::Fetcher
  u.make_fetch_def = MyIpUtilities::MakeFetchDef
  u.make_context = MyIpUtilities::MakeContext
  u.make_options = MyIpUtilities::MakeOptions
  u.make_request = MyIpUtilities::MakeRequest
  u.make_response = MyIpUtilities::MakeResponse
  u.make_result = MyIpUtilities::MakeResult
  u.make_point = MyIpUtilities::MakePoint
  u.make_spec = MyIpUtilities::MakeSpec
  u.make_url = MyIpUtilities::MakeUrl
  u.param = MyIpUtilities::Param
  u.prepare_auth = MyIpUtilities::PrepareAuth
  u.prepare_body = MyIpUtilities::PrepareBody
  u.prepare_headers = MyIpUtilities::PrepareHeaders
  u.prepare_method = MyIpUtilities::PrepareMethod
  u.prepare_params = MyIpUtilities::PrepareParams
  u.prepare_path = MyIpUtilities::PreparePath
  u.prepare_query = MyIpUtilities::PrepareQuery
  u.result_basic = MyIpUtilities::ResultBasic
  u.result_body = MyIpUtilities::ResultBody
  u.result_headers = MyIpUtilities::ResultHeaders
  u.transform_request = MyIpUtilities::TransformRequest
  u.transform_response = MyIpUtilities::TransformResponse
}
