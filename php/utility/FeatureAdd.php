<?php
declare(strict_types=1);

// MyIp SDK utility: feature_add

class MyIpFeatureAdd
{
    public static function call(MyIpContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
