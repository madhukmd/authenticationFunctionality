import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  const route =
    jwtToken === undefined ? <Redirect to="/login" /> : <Route {...props} />
  return route
}
export default ProtectedRoute
