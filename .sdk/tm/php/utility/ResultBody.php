<?php
declare(strict_types=1);

// MyIp SDK utility: result_body

class MyIpResultBody
{
    public static function call(MyIpContext $ctx): ?MyIpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
