import { bindActionCreators } from 'redux';
import nextConnect, { openNav, closeNav } from '../../state/store';

const navButton =
  ({ navOpen, openNav, closeNav }) => (
    navOpen
      ? <button onClick={closeNav} className="navButton">Close nav </button>
      : <button onClick={openNav} className="navButton">Open nav</button>
  );

export default nextConnect(
  state => (state),
  dispatch => bindActionCreators({ openNav, closeNav }, dispatch),
)(navButton);
