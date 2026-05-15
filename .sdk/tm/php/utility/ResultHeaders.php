<?php
declare(strict_types=1);

// MyIp SDK utility: result_headers

class MyIpResultHeaders
{
    public static function call(MyIpContext $ctx): ?MyIpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
