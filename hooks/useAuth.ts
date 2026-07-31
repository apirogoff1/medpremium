import { useAuthStore } from '@/store'

export function useAuth() {
  const user = useAuthStore(state => state.user)
  const token = useAuthStore(state => state.token)
  const isLoading = useAuthStore(state => state.isLoading)
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const setLoading = useAuthStore(state => state.setLoading)

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    logout,
    setLoading,
  }
}
