interface UserDetails {
  user: { username: string; token: string }
}
export const addUserToLocalStorage = (user: UserDetails) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const getThemeFromLocalStorage = () => {
  let darkMode: string | null = 'light'
  if (localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
  }
  return darkMode
}
