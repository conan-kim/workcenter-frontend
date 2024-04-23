import {Link} from 'react-router-dom'

function NoMatch() {
  return (
    <>
      <h1>NoMatch!!!!!!!!!!!!! 404</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  )
}

export default NoMatch
