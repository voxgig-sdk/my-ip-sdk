# frozen_string_literal: true

# Typed models for the MyIp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetIpInfo entity data model.
#
# @!attribute [rw] cc
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] ip
#   @return [String]
GetIpInfo = Struct.new(
  :cc,
  :country,
  :ip,
  keyword_init: true
)

# Match filter for GetIpInfo#load (any subset of GetIpInfo fields).
#
# @!attribute [rw] cc
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
GetIpInfoLoadMatch = Struct.new(
  :cc,
  :country,
  :ip,
  keyword_init: true
)

