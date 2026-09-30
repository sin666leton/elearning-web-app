import { create } from 'zustand'

export interface User {
  id: number
  name: string
  email: string
  role?: string
}

interface AuthState {
  user: User | null
  token: string | null
  
  // Actions
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  
  login: (user, token) => {
    // Simpan token ke localStorage agar tetap login saat halaman di-refresh
    localStorage.setItem('auth_token', token)
    set({ user, token })
  },
  
  logout: () => {
    localStorage.removeItem('auth_token')
    set({ user: null, token: null })
  }
}))
