export const auth = {
  getToken: getToken,
  logout: localStorage.removeItem('user') && localStorage.removeItem('token')
}

function getToken() {
  let user = localStorage.getItem('user')
  let parsedUser = JSON.parse(user)

  if (parsedUser && parsedUser.user.token) {
    return parsedUser.user.token
  }

  return null
}

