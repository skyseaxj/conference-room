# 1.Users

### URL:http://localhost/users/login

请求方式：**POST**

用途：用户登录

需要参数：json

```
{
  "username": "string",
  "password": "string"
}
```

响应:json

```json
{
    "success": true,
    "code": 20000,
    "message": "成功",
    "data": {
        "token": "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJnb2R4dSIsImlhdCI6MTY2NzM4MzMwMiwiZXhwIjoxNjY3OTg4MTAyfQ.m2lEdYb94QqUU25dYh6SK6a4rDwAUqYk-TbrV_syxNjKiwftpoZs15ClqChZHdy3TNDarDPuMpms5Vg0x7dIxw",
        "status": 1
    }
}
```



### URL:http://localhost/users/register

请求方式：**POST**

用途：用户注册

需要参数：json

```json
{
  "email": "string",
  "password": "string",
  "phone": "string",
  "status": 0,
  "username": "string"
}
```

响应:json

```json
{
  "email": "string",
  "password": "string",
  "phone": "string",
  "status": 0,
  "username": "string"
}
```

# 2.rooms

### URL:http://localhost/rooms

请求方式：**GET**

用途：获取会议室信息

需要参数：?day=2021-11-26（可选）

没有day，则获取会议室原始信息，用于管理员会议室管理展示

有day,则获取会议室更新后信息，用于查看会议室可用时间段



响应:json

```json
{
    "success": true,
    "code": 20000,
    "message": "成功",
    "data": {
        "rooms": [
            {
                "id": 1,
                "location": "zk0mXwCnTx",
                "name": "4311",
                "site": "h3eOWC1KxY",
                "num": 229,
                "times": "111"
            },
            {
                "id": 2,
                "location": "string",
                "name": "4312",
                "site": "123213g",
                "num": 0,
                "times": "112"
            },
            {
                "id": 3,
                "location": "string",
                "name": "4312",
                "site": "123213g",
                "num": 0,
                "times": "112"
            }
        ]
    }
}
```







