import { bindActionCreators } from 'redux'
import nextConnect, { logOut } from '../../state/store'

const logOutComponent = 
  ({logOut}) => (
    <div>
      <p>Well done you, you can press a button</p>

      <span onClick={logOut} className='button'>Log out</span>
    </div>
  )

export default nextConnect(state => ({}), dispatch => bindActionCreators({logOut}, dispatch))(logOutComponent)