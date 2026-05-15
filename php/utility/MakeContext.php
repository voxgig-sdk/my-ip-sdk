<?php
declare(strict_types=1);

// MyIp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MyIpMakeContext
{
    public static function call(array $ctxmap, ?MyIpContext $basectx): MyIpContext
    {
        return new MyIpContext($ctxmap, $basectx);
    }
}
