# E-Learning Web Application
API Documentation
## Login
Endpoint
```
POST /api/v1/login
content-type: "application/json"

{
    email: string,
    password: string
}
```
### Response
200 OK
```
{
    data: {
        user: {
        id: 1,
        name: 'Zidan',
        email: 'z***n@elearning.com',
        role: 'student'
        },
        token: 'fake-token'
    }
}
```
422 Validation error
```
{
    error: {
        email: "Error message",
        password: "Error message"
    },
    code: "VALIDATION_ERROR"
}
```
401 Invalid credentials
```
{
    error: {
        message: "Error message"
    },
    code: "UNAUTHORIZED"
}
```
403 Already login
```
{
    error: {
        message: "Error message"
    },
    code: "ALREADY_LOGIN
}
```
## Register
Endpoint
```
POST /api/v1/register
content-type: "application/json"

{
    name: string,
    email: string,
    role_id: int,
    password: string
}
```
### Response
200 OK
```
{
    data: {
        user: {
        id: 1,
        name: 'Zidan',
        email: 'z***n@elearning.com',
        role: 'student'
        },
        token: 'fake-token'
    }
}
```
422 Validation error
```
{
    error: {
        email: "Email tidak valid",
        name: "Nama tidak valid",
        password: "Password tidak valid",
        role_id: "Role tidak valid",
    },
    code: "VALIDATION_ERROR"
}
```
409 Conflict
```
{
    error: {
        email: "Email sudah terdaftar",
    },
    code: "ALREADY_REGISTERED"
}
```