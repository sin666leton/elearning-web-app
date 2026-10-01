import { http, HttpResponse, delay } from 'msw'

export const handlers = [
  http.post('http://localhost:3000/api/v1/register', async ({ request }) => {
    await delay(2000)

    try {
      const body = await request.json()
    } catch (e) {
      console.log('Error parsing JSON in mock:', e)
    }

    // 422
    // return HttpResponse.json({
    //   error: {
    //     email: "Email tidak valid",
    //     name: "Nama tidak valid",
    //     password: "Password tidak valid",
    //     role_id: "Role tidak valid",
    //   },
    //     code: "VALIDATION_ERROR"
    // }, { status: 422 })

    // 422
    // return HttpResponse.json({
    //   error: {
    //     email: "Email sudah terdaftar",
    //   },
    //   code: "ALREADY_REGISTERED"
    // }, { status: 422 })

    // 403
    // return HttpResponse.json({
    //   error: {
    //     message: "Harus logout terlebih dahulu",
    //   },
    //   code: "ALREADY_REGISTERED"
    // }, { status: 403 })
  })
]
