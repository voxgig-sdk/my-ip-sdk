# MyIp SDK

Look up the caller's public IP address with its country name and ISO country code

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About My IP API

[My IP API](https://www.miip.my/) is a small, free service that echoes back the calling client's public IP address together with the country it resolves to. It is operated by VPS.org LLC (created by nadermx), which also runs regional variants such as `miip.co` (Colombia) and `miip.mx` (Mexico).

What you get from the API:

- `ip` — the requesting client's IP address (IPv4 or IPv6 as seen by the server)
- `country` — the country name in English
- `cc` — the ISO 3166-1 alpha-2 country code

A single GET request to `https://api.miip.my` returns this data as a simple JSON object. CORS is enabled, so the endpoint can be called directly from browser code, and no API key or signup is needed.

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

## 30-second quickstart

### TypeScript

```ts
import { MyIpSDK } from 'my-ip'

const client = new MyIpSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **GetIpInfo** | Returns the caller's IP address together with the resolved country name and ISO alpha-2 country code via a GET request to the root endpoint at `https://api.miip.my`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from myip_sdk import MyIpSDK

client = MyIpSDK({})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'myip_sdk.php';

$client = new MyIpSDK([]);


// Load a specific getipinfo
[$getipinfo, $err] = $client->GetIpInfo(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/my-ip-sdk/go"

client := sdk.NewMyIpSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "MyIp_sdk"

client = MyIpSDK.new({})


# Load a specific getipinfo
getipinfo, err = client.GetIpInfo(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("my-ip_sdk")

local client = sdk.new({})


-- Load a specific getipinfo
local getipinfo, err = client:GetIpInfo(nil):load(
  { id = "example_id" }, nil
)
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
client = MyIpSDK.test(None, None)
result, err = client.GetIpInfo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MyIpSDK::test(null, null);
[$result, $err] = $client->GetIpInfo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetIpInfo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MyIpSDK.test(nil, nil)
result, err = client.GetIpInfo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetIpInfo(nil):load(
  { id = "test01" }, nil
)
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

## Using the My IP API

- Upstream: [https://www.miip.my/](https://www.miip.my/)
- API docs: [https://www.miip.my/api-docs/](https://www.miip.my/api-docs/)

- Free to use for both personal and commercial projects.
- Attribution to [MIIP.my](https://www.miip.my/) is requested to keep the service available.
- No formal rate limit documented when attribution is provided.
- No authentication or API key required.

---

Generated from the My IP API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
