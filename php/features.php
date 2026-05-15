<?php
declare(strict_types=1);

// MyIp SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MyIpFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MyIpBaseFeature();
            case "test":
                return new MyIpTestFeature();
            default:
                return new MyIpBaseFeature();
        }
    }
}
