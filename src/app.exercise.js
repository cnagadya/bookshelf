import React, { useEffect, useState } from 'react'
import * as auth from 'auth-provider'
import { AuthenticatedApp } from './authenticated-app'
import { UnauthenticatedApp } from './unauthenticated-app'
import { client } from 'utils/api-client'

function App() {
  const [user, setUser] = useState()

  const login = form => auth.login(form).then(u => setUser(u))
  const register = form => auth.register(form).then(u => setUser(u))
  const logout = () => {
    auth.logout()
    setUser(null)
  }

  useEffect(() => {

    const getToken = async () => {
      const token = await auth.getToken()
      if (token) {
        const response = await client('me', { token })
        setUser(response.user)
      } else setUser(null)
    }
    getToken()

  }, [])

  return user ? <AuthenticatedApp user={user} logout={logout} />
    : <UnauthenticatedApp login={login} register={register} />
}

export { App }

/*
eslint
  no-unused-vars: "off",
*/
