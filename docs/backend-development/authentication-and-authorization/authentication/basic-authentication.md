# Basic Authentication

## Introduction

**Basic Authentication** is one of the simplest and most straightforward authentication methods. It uses **HTTP headers** to send credentials, such as **username** and **password**, to the server.

## How It Works

When a client wants to access a resource protected by Basic Authentication, it must attach an **Authorization Header** encoded in Base64. The format is as follows:

```
Authorization: Basic base64(username:password)
```

### **Steps:**

1. The user enters a **username** and **password**.
2. The client encodes the credentials using **Base64** in the format `base64(username:password)`.
3. The client sends the **Authorization Header** to the server.
4. The server decodes and verifies the credentials.
5. If the credentials are valid, the server grants access to the resource.

## Example

### **Client Request (Using cURL)**

```sh
curl -u username:password https://api.example.com/protected-resource
```

Or send the **Authorization Header** directly:

```sh
curl -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" https://api.example.com/protected-resource
```

### **Server-side Example (Node.js + Express)**

::: code-group
```Javascript
const express = require("express");
const app = express();

app.use((req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send("Unauthorized");

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  if (username === "admin" && password === "password123") {
    return next();
  }
  res.status(403).send("Forbidden");
});

app.get("/protected-resource", (req, res) => {
  res.send("You have accessed a protected resource!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## Security Concerns

Although Basic Authentication is simple and easy to implement, it has several security risks:

- **Passwords are only Base64-encoded, not encrypted**, making them easy to decode.
- **No built-in encryption**, requiring **HTTPS** to prevent interception.
- **Vulnerable to brute-force attacks**, necessitating additional security measures like rate limiting or Multi-Factor Authentication.

## Best Practices

- **Always use HTTPS** to encrypt communication.
- **Avoid using it for sensitive data** or in high-security applications.
- **Consider using Token-Based Authentication, such as OAuth or JWT**, for better security.

## Conclusion

Basic Authentication is a quick and easy method for authentication but comes with security risks. It should only be used in low-security scenarios or combined with **HTTPS and other security measures** to mitigate potential threats.

