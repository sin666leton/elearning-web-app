import { http, HttpResponse, delay } from 'msw'

export const handlers = [
  // http.get('http://localhost:8000/sanctum/csrf-cookie', async ({ request }) => {
  //   return HttpResponse.json({}, { status: 200 })
  // }),
  // http.post('http://localhost:8000/api/v1/login', async ({ request }) => {
  //   delay(2000)

  //   return HttpResponse.json({
  //     data: {
  //       user: {
  //         id: 1,
  //         name: 'Zidan',
  //         email: 'z***n@elearning.com',
  //         role: 'siswa'
  //       },
  //       token: 'fake-token'
  //     }
  //   }, { status: 200 })
  // }),

  // http.get('http://localhost:8000/api/v1/roles', async ({ request }) => {
  //   delay(2000)

  //   return HttpResponse.json({
  //     data: [
  //       { id: 1, name: 'Siswa' },
  //       { id: 2, name: 'Guru' }
  //     ]
  //   }, { status: 200 })
  // }),

  // http.post('http://localhost:8000/api/v1/register', async ({ request }) => {
  //   await delay(2000)

  //   try {
  //     const body = await request.json()
  //   } catch (e) {
  //     console.log('Error parsing JSON in mock:', e)
  //   }

  //   // 422
  //   // return HttpResponse.json({
  //   //   error: {
  //   //     email: "Email tidak valid",
  //   //     name: "Nama tidak valid",
  //   //     password: "Password tidak valid",
  //   //     role_id: "Role tidak valid",
  //   //   },
  //   //     code: "VALIDATION_ERROR"
  //   // }, { status: 422 })

  //   // 409
  //   // return HttpResponse.json({
  //   //   error: {
  //   //     email: "Email sudah terdaftar",
  //   //   },
  //   //   code: "ALREADY_REGISTERED"
  //   // }, { status: 409 })

  //   // 403
  //   // return HttpResponse.json({
  //   //   error: {
  //   //     message: "Harus logout terlebih dahulu",
  //   //   },
  //   //   code: "ALREADY_REGISTERED"
  //   // }, { status: 403 })

  //   // 200
  //   return HttpResponse.json({
  //     data: {
  //       id: 1,
  //       name: "zidan",
  //       email: "z***n@example.com",
  //       role: "murid",
  //     }
  //   })
  // })

  http.delete('http://localhost:8000/api/v1/logout', async ({ request }) => {
    return HttpResponse.json({}, { status: 204 })
  }),
  http.get('http://localhost:8000/api/v1/user', async ({ request }) => {
    return HttpResponse.json({
      data: {
        id: 1,
        name: "Ahmad Zidan",
        email: "z***n@example.com",
        role: "guru"
      }
    }, { status: 200 })
  }),
  http.get('http://localhost:8000/api/v1/classrooms', async ({ request }) => {
    await delay(2000)

    return HttpResponse.json({
      data: {
        data: [
          {
            id: 1,
            name: "Web Programming",
            participants: 20,
            createdAt: "5 Oktokber 2026"
          },
          {
            id: 2,
            name: "Content Creator",
            participants: 20,
            createdAt: "10 Oktokber 2026"
          },
          {
            id: 3,
            name: "Makeup Artist",
            participants: 30,
            createdAt: "1 Oktokber 2026"
          },
          {
            id: 4,
            name: "Bahasa Inggris",
            participants: 19,
            createdAt: "9 Septemebr 2026"
          },
          {
            id: 5,
            name: "Bahasa Jepang",
            participants: 25,
            createdAt: "20 Oktokber 2026"
          }
        ],
        metadata: {
          lastPage: 3,
          currentPage: 1,
          pages: [1, 2, 3]
        }
      }
    })
  })
]
