import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import DashboardTeacherLayout from './components/layouts/DashboardTeacherLayout'
import DashboardTeacher from './components/pages/teachers/DashboardTeacher'
import ClassroomTeacherPage from './components/pages/teachers/ClassroomTeacherPage'
import ProtectedRoute from './middlewares/ProtectedRoute'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute allow={undefined} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<ProtectedRoute allow='guru' />}>
            <Route element={<DashboardTeacherLayout />}>
              <Route path='/guru/dashboard' element={<DashboardTeacher />} />
              <Route path='/guru/classrooms' element={<ClassroomTeacherPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
