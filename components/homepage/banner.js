import BannerButton from './bannerButton'
import nextConnect, { loggedIn } from '../../state/store'

const banner = 
  ({loggedIn}) => (
    <div className='banner'>
      <h1>Do something. Do something else. Do a third thing.</h1>
      <span>Here is a bit of text that clarifies the bit of text above.</span>
      <div>
        <BannerButton 
          link='/sign-up' 
          text={ loggedIn ? 'Sign out :(' : 'Sign in!' }
        />
        
        <BannerButton 
          link='/book-demo' 
          text='Look at this!'
        />
      </div>
    </div>
  )

export default nextConnect(({loggedIn}) => ({loggedIn}))(banner)