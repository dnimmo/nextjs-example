import { bindActionCreators } from 'redux';
import nextConnect, { logIn } from '../../state/store';

const logInComponent =
  ({ logIn }) => (
    <div>
      <p>Or don't, because I'm not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you've signed in.</p>

      <span onClick={logIn} className="button">Log in</span>
    </div>
  );

export default nextConnect(
  state => ({}), 
  dispatch => bindActionCreators({ logIn }, dispatch)
)(logInComponent);
