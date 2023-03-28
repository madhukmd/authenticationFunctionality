import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
