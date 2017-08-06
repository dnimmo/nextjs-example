import Link from 'next/link'

const bannerButton = 
  ({text, link}) => (
    <Link href={link}>
      <a className='button'>{text}</a>
    </Link>
  )

export default bannerButton