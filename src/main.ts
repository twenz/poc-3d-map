import './style.css'

const auth = () => {
  const app = document.getElementById('app')
  if (!app) return
  // localStorage.setItem('auth', 'isAuth')
  // localStorage.clear()
  const auth = localStorage.getItem('auth')
  if (auth) {
    const map = document.createElement('div')
    map.id = 'map'
    map.innerHTML = `
    <input id="logout" type="submit" class="button" value="Logout">
    `
    app.appendChild(map)

  } else {
    const login = document.createElement('div')
    login.id = 'auth'
    login.innerHTML = `
      <form id="login-form" >
        <div class="form-group">
            <label>User</label>
            <input type="text" placeholder="User = user"/>
            <small class="text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password = pass"/>
        </div>
        <div class="form-group">
            <button type="submit" class="button success">Login</button>
        </div>
      </form>
    `
    app.appendChild(login)
  }
}

auth()