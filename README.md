# Presence System API

---

## Table of Contents

- [Presence System API](#presence-system-api)
  - [Table of Contents](#table-of-contents)
  - [Health Check](#health-check)
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

## User

### Store User

Endpoint

```text
POST /user
```

Body

```json
{
  "uid": "10M7ADJ1HU",
  "name": "Muhammad Handi Rachmawan"
}
```

Response

```json
{
  "status": "success",
  "data": {
    "uid": "10M7ADJ1HU",
    "name": "Muhammad Handi Rachmawan",
    "createdAt": "2022-11-01T10:40:29.687Z",
    "updatedAt": "2022-11-01T10:40:29.687Z"
  }
}
```

### Fetch All Users

Endpoint

```text
GET /user
```

Response

```json
{
  "status": "success",
  "data": [
    {
      "uid": "10M7ADJ1",
      "name": "Muhammad Handi Rachmawan",
      "createdAt": "2022-11-01T10:39:24.473Z",
      "updatedAt": "2022-11-01T10:39:24.473Z"
    },
    {
      "uid": "10M7ADJ1HU",
      "name": "Muhammad Handi Rachmawan",
      "createdAt": "2022-11-01T10:40:29.687Z",
      "updatedAt": "2022-11-01T10:40:29.687Z"
    }
  ]
}
```

### Modify User

Endpoint

```text
PUT /user/:uid => /user/10M7ADJ1
```

Body

```json
{
  "name": "Handi Rachmawan"
}
```

Response

```json
{
  "status": "success",
  "data": {
    "uid": "10M7ADJ1",
    "name": "Handi Rachmawan",
    "createdAt": "2022-11-01T10:39:24.473Z",
    "updatedAt": "2022-11-02T06:01:37.462Z"
  }
}
```

### Fetch User

Endpoint

```text
GET /user/:uid => /user/10M7ADJ1
```

Response

```json
{
  "status": "success",
  "data": {
    "uid": "10M7ADJ1",
    "name": "Handi Rachmawan",
    "createdAt": "2022-11-01T10:39:24.473Z",
    "updatedAt": "2022-11-02T06:01:37.462Z"
  }
}
```

### Delete User

Endpoint

```text
DELETE /user/:uid => /user/10M7ADJ1
```

Response

```json
{
  "status": "success",
  "data": {
    "uid": "10M7ADJ1",
    "name": "Handi Rachmawan",
    "createdAt": "2022-11-01T10:39:24.473Z",
    "updatedAt": "2022-11-02T06:01:37.462Z"
  }
}
```

---

## Check

### Check In

Endpoint

```text
POST /check/:uid

```

Response

```json
{
  "status": "success",
  "data": {
    "userUid": "1697AJKOU",
    "in": "2022-11-02T06:16:05.514Z",
    "out": null,
    "date": "2022-11-02T00:00:00.000Z"
  }
}
```

### Check Out

Endpoint

```text
POST /check/:uid

```

Response

```json
{
  "status": "success",
  "data": {
    "userUid": "1697AJKOU",
    "in": "2022-11-02T06:16:05.514Z",
    "out": "2022-11-02T06:18:12.186Z",
    "date": "2022-11-02T00:00:00.000Z"
  }
}
```

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
      "userUid": "1697AJKOU",
      "in": "2022-11-02T06:16:05.514Z",
      "out": "2022-11-02T06:18:12.186Z",
      "date": "2022-11-02T00:00:00.000Z"
    }
  ]
}
```
