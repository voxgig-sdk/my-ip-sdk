# MyIp SDK feature factory

from feature.base_feature import MyIpBaseFeature
from feature.test_feature import MyIpTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MyIpBaseFeature(),
        "test": lambda: MyIpTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
