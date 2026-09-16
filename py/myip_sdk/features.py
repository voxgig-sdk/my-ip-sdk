# MyIp SDK feature factory

from myip_sdk.feature.base_feature import MyIpBaseFeature
from myip_sdk.feature.ratelimit_feature import MyIpRatelimitFeature
from myip_sdk.feature.retry_feature import MyIpRetryFeature
from myip_sdk.feature.test_feature import MyIpTestFeature
from myip_sdk.feature.timeout_feature import MyIpTimeoutFeature


_FEATURES = {
    "base": lambda: MyIpBaseFeature(),
    "ratelimit": lambda: MyIpRatelimitFeature(),
    "retry": lambda: MyIpRetryFeature(),
    "test": lambda: MyIpTestFeature(),
    "timeout": lambda: MyIpTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
