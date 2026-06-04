<?php
declare(strict_types=1);

// MyIp SDK configuration

class MyIpConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MyIp",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.miip.my",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_ip_info" => [],
                ],
            ],
            "entity" => [
        'get_ip_info' => [
          'fields' => [
            [
              'name' => 'cc',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'country',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'ip',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
          ],
          'name' => 'get_ip_info',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'method' => 'GET',
                  'orig' => '/',
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'parts' => [],
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MyIpFeatures::make_feature($name);
    }
}
