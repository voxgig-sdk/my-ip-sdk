package voxgigmyipsdk

import (
	"github.com/voxgig-sdk/my-ip-sdk/go/core"
	"github.com/voxgig-sdk/my-ip-sdk/go/entity"
	"github.com/voxgig-sdk/my-ip-sdk/go/feature"
	_ "github.com/voxgig-sdk/my-ip-sdk/go/utility"
)

// Type aliases preserve external API.
type MyIpSDK = core.MyIpSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MyIpEntity = core.MyIpEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MyIpError = core.MyIpError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetIpInfoEntityFunc = func(client *core.MyIpSDK, entopts map[string]any) core.MyIpEntity {
		return entity.NewGetIpInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMyIpSDK = core.NewMyIpSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMyIpSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MyIpSDK  { return NewMyIpSDK(nil) }
func Test() *MyIpSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
