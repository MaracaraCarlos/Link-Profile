import 'bootstrap-icons/font/bootstrap-icons.css'
import foto from '../images/heyMister.jpeg'

const Header = () => {
  return (
    <div className='header_container'>
      <div className='container_img'>
        <img src={foto} alt='profile_img' />
      </div>
      <h1 className='name_profile'>Carlos Maracara</h1>
      <p className='proffession'>"Frontend Developer and Civil Engineer"</p>
    </div>
  )
}

export default Header