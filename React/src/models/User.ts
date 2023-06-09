export const createUserBody = function (name: string, email: string, password: string) {
  return JSON.stringify({
    query: `mutation {createUser(name:"${name}", email: "${email}", password:"${password}") {id,name,email,created_at}}`,
  })
}

export const loginUserBody = function (email: string, password: string) {
  return JSON.stringify({
    query: `mutation {login(email:"${email}", password:"${password}", device:"api"){token,
        user {
          id,
          name,
          email,
          created_at}}}`,
  })
}

export const logoutUserBody = function () {
  return JSON.stringify({
    query: `mutation {logout}`,
  })
}

export const userInfoBody = function () {
  return JSON.stringify({
    query: `{me {id, name, email, created_at}}`,
  })
}
