# MyIp SDK

My IP API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install my-ip
```

**Python**
```bash
pip install my-ip-sdk
```

**PHP**
```bash
composer require voxgig/my-ip-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/my-ip-sdk/go
```

**Ruby**
```bash
gem install my-ip-sdk
```

**Lua**
```bash
luarocks install my-ip-sdk
```

## Quickstart

### TypeScript

```ts
import { MyIpSDK } from 'my-ip'

const client = new MyIpSDK({
  apikey: process.env.MY-IP_APIKEY,
})

// Load getipinfo data
const getipinfo = await client.GetIpInfo().load({})
console.log(getipinfo.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o my-ip-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "my-ip": {
      "command": "/abs/path/to/my-ip-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetIpInfo** |  | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from myip_sdk import MyIpSDK

client = MyIpSDK({
    "apikey": os.environ.get("MY-IP_APIKEY"),
})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo().load({"id": "example_id"})
print(getipinfo)
```

### PHP

```php
<?php
require_once 'myip_sdk.php';

$client = new MyIpSDK([
    "apikey" => getenv("MY-IP_APIKEY"),
]);


// Load a specific getipinfo
[$getipinfo, $err] = $client->GetIpInfo()->load(["id" => "example_id"]);
print_r($getipinfo);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/my-ip-sdk/go"

client := sdk.NewMyIpSDK(map[string]any{
    "apikey": os.Getenv("MY-IP_APIKEY"),
})

// Load getipinfo data
getipinfo, err := client.GetIpInfo(nil).Load(map[string]any{}, nil)
fmt.Println(getipinfo)
```

### Ruby

```ruby
require_relative "MyIp_sdk"

client = MyIpSDK.new({
  "apikey" => ENV["MY-IP_APIKEY"],
})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo().load({ "id" => "example_id" })
puts getipinfo
```

### Lua

```lua
local sdk = require("my-ip_sdk")

local client = sdk.new({
  apikey = os.getenv("MY-IP_APIKEY"),
})


-- Load a specific getipinfo
local getipinfo, err = client:GetIpInfo():load({ id = "example_id" })
print(getipinfo)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MyIpSDK.test()
const result = await client.GetIpInfo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MyIpSDK.test()
result, err = client.GetIpInfo().load({"id": "test01"})
```

### PHP

```php
$client = MyIpSDK::test();
[$result, $err] = $client->GetIpInfo()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.GetIpInfo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MyIpSDK.test
result, err = client.GetIpInfo().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:GetIpInfo():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the My IP API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
