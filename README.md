# Presence System API

---

Online documentation, can be found in [here](http://34.101.216.127:8000/docs.html).

---

## Table of Contents

- [Presence System API](#presence-system-api)
  - [Table of Contents](#table-of-contents)
  - [Health Check](#health-check)
  - [Generate API Key](#generate-api-key)
  - [User](#user)
    - [Store User](#store-user)
    - [Fetch All Users](#fetch-all-users)
    - [Modify User](#modify-user)
    - [Fetch User](#fetch-user)
    - [Delete User](#delete-user)
  - [Check](#check)
    - [Check In](#check-in)
    - [Check Out](#check-out)
    - [Fetch All Checkes](#fetch-all-checkes)

---

## Health Check

Endpoint

```text
GET /
```

Response

```json
{
  "status": "success",
  "data": {
    "time": "2022-11-02T05:54:41.412Z"
  }
}
```

---

## Generate API Key

Endpoint

```text
POST /key
```

Response

```json
{
  "status": "success",
  "data": {
    "key": "7aecca35-c410-4b12-9c92-7cea39cdc40c"
  }
}
```

---

## User

### Store User

Endpoint

```text
POST /user
```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Body

```json
{
  "id": "1R2EQ4W3",
  "name": "Joy"
}
```

Response

```json
{
  "status": "success",
  "data": {
    "id": "1R2EQ4W3",
    "name": "Joy",
    "createdAt": "2022-11-06T04:02:40.370Z",
    "updatedAt": "2022-11-06T04:02:40.370Z"
  }
}
```

### Fetch All Users

Endpoint

```text
GET /user
```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "1R2EQ4W3",
      "name": "Joy",
      "createdAt": "2022-11-06T04:02:40.370Z",
      "updatedAt": "2022-11-06T04:02:40.370Z"
    }
  ]
}
```

### Modify User

Endpoint

```text
PUT /user/:id => PUT /user/1R2EQ4W3
```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Body

```json
{
  "name": "Joyful"
}
```

Response

```json
{
  "status": "success",
  "data": {
    "id": "1R2EQ4W3",
    "name": "Joyful",
    "createdAt": "2022-11-06T04:02:40.370Z",
    "updatedAt": "2022-11-06T04:11:08.193Z"
  }
}
```

### Fetch User

Endpoint

```text
GET /user/:id => GET /user/1R2EQ4W3
```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Response

```json
{
  "status": "success",
  "data": {
    "id": "1R2EQ4W3",
    "name": "Joyful",
    "createdAt": "2022-11-06T04:02:40.370Z",
    "updatedAt": "2022-11-06T04:11:08.193Z"
  }
}
```

### Delete User

Endpoint

```text
DELETE /user/:id => DELETE /user/1R2EQ4W3
```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Response

```json
{
  "status": "success",
  "data": {
    "id": "1R2EQ4W3",
    "name": "Joyful",
    "createdAt": "2022-11-06T04:02:40.370Z",
    "updatedAt": "2022-11-06T04:11:08.193Z"
  }
}
```

---

## Check

### Check In

Endpoint

```text
POST /check/:id => POST /check/1R2EQ4W3

```

Header

```text
X-API-Key: {{API-KEY}} => X:API-Key: "7aecca35-c410-4b12-9c92-7cea39cdc40c"
```

Response

```json
{
  "status": "success",
  "data": {
    "userId": "1R2EQ4W3",
    "in": "11:13:11",
    "out": null,
    "date": "11/6/2022"
  }
}
```

### Check Out

TODO

### Fetch All Checkes

Endpoint

```text
GET /check
```

Response

```json
{
  "status": "success",
  "data": [
    {
      "userId": "1R2EQ4W3",
      "in": "11:13:11",
      "out": null,
      "date": "11/6/2022"
    }
  ]
}
```
