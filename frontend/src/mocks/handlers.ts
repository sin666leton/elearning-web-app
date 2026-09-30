import { http, HttpResponse, delay } from 'msw'

export const handlers = [
  http.post('http://localhost:3000/api/v1/login', async ({ request }) => {
    await delay(2000)
    try {
      const body = await request.json()
    } catch (e) {
      console.log('Error parsing JSON in mock:', e)
    }

    // validation error
    // return HttpResponse.json({
    //   error: {
    //     email: "Email tidak valid",
    //     password: "Password tidak valid"
    //   },
    //   code: "VALIDATION_ERROR"
    // }, { status: 422 })

    // 401
    // return HttpResponse.json({
    //   error: {
    //     message: "Email atau password salah"
    //   },
    //   code: "UNAUTHORIZED"
    // }, { status: 401 })

    // 200
    return HttpResponse.json({
      data: {
        user: {
          id: 1,
          name: 'Zidan',
          email: 'z***n@elearning.com',
          role: 'student'
        },
        token: 'fake-jwt-token-12345'
      }
    })
  })
]
