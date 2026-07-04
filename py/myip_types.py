# Typed models for the MyIp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetIpInfo:
    cc: str
    country: str
    ip: str


@dataclass
class GetIpInfoLoadMatch:
    cc: Optional[str] = None
    country: Optional[str] = None
    ip: Optional[str] = None

