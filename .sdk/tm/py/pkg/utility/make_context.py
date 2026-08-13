# MyIp SDK utility: make_context

from projectname_sdk.core.context import MyIpContext


def make_context_util(ctxmap, basectx):
    return MyIpContext(ctxmap, basectx)
