<?php
declare(strict_types=1);

// MyIp SDK utility: prepare_body

class MyIpPrepareBody
{
    public static function call(MyIpContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
