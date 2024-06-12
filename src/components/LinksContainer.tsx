import Link from './Link'

const LinksContainer = () => {
  return (
    <div className='container_links'>
      <Link 
        body='LinkedIn' 
        clase='bi bi-linkedin'
        username='@CarlosMaracara'
        enlace='https://www.linkedin.com/in/carlos-maracara-sanchez-52b89a161/' />
      <Link 
        body='GitHub' 
        clase='bi bi-github'
        username='@MaracaraCarlos'
        enlace='https://github.com/MaracaraCarlos' />
      <Link 
        body='Resume' 
        clase='bi bi-file-text'
        username='@googledrive'
        enlace='https://drive.google.com/file/d/1G9xj2tdqsp9CUA0JC6wxwULmUlgMopoc/view?usp=drive_link' />
      <Link 
        body='X' 
        clase='bi bi-twitter-x'
        username='@caboepio'
        enlace='https://twitter.com/caboepio' />
    </div>
  )
}

export default LinksContainer