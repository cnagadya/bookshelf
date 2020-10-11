import React, { Suspense } from 'react'
import {useAuth} from './context/auth-context'
import {FullPageSpinner} from './components/lib'

const AuthenticatedApp = React.lazy(() => import(/* webpackPrefetch: true */ './authenticated-app'));
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'));

function App() {
  const {user} = useAuth()
  // 🐨 wrap this in a <React.Suspense /> component
  return <Suspense fallback={<FullPageSpinner/>}>
    { user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
  </Suspense>
}

export {App}
