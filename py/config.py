# MyIp SDK configuration


def make_config():
    return {
        "main": {
            "name": "MyIp",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.miip.my",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_ip_info": {},
            },
        },
        "entity": {
      "get_ip_info": {
        "fields": [
          {
            "name": "cc",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "country",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "get_ip_info",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/",
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "parts": [],
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
