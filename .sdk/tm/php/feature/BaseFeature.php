<?php
declare(strict_types=1);

// MyIp SDK base feature

class MyIpBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MyIpContext $ctx, array $options): void {}
    public function PostConstruct(MyIpContext $ctx): void {}
    public function PostConstructEntity(MyIpContext $ctx): void {}
    public function SetData(MyIpContext $ctx): void {}
    public function GetData(MyIpContext $ctx): void {}
    public function GetMatch(MyIpContext $ctx): void {}
    public function SetMatch(MyIpContext $ctx): void {}
    public function PrePoint(MyIpContext $ctx): void {}
    public function PreSpec(MyIpContext $ctx): void {}
    public function PreRequest(MyIpContext $ctx): void {}
    public function PreResponse(MyIpContext $ctx): void {}
    public function PreResult(MyIpContext $ctx): void {}
    public function PreDone(MyIpContext $ctx): void {}
    public function PreUnexpected(MyIpContext $ctx): void {}
}
