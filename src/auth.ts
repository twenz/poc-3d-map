const loginForm = document.getElementById('login-form')
const logout = document.getElementById('logout')

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    localStorage.setItem('auth', 'isAuth')
    window.location.reload()
  })
}

if (logout) {
  logout.addEventListener('click', async (event) => {
    event.preventDefault();
    localStorage.removeItem('auth')
    window.location.reload()
  })
}