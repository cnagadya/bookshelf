/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Link} from 'components/lib'
// 💰 and feel free to take a peek at the implementation of that styled component
// to be reminded how you can create styled components out of existing components

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here.
        <Link to="/discover">Go home</Link>
        {/* 🐨 add a <Link> here that says "Go home" and sends the user to "/discover" */}
      </div>
    </div>
  )
}

export {NotFoundScreen}
