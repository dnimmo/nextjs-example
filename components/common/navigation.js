import Link from 'next/link'

const navigation = 
  () => (
    <nav className='siteNavigation'>
      <Link href='/index'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/sign-up'>Sign up/in</Link>
      <Link href='/book-demo'>Book a demo</Link>
    </nav>
  )

export default navigation