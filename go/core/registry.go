package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetIpInfoEntityFunc func(client *MyIpSDK, entopts map[string]any) MyIpEntity

