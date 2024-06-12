import 'bootstrap-icons/font/bootstrap-icons.css'

type Props = {
  body: string
  clase: string
  username: string
  enlace: string
}

const Link = ({ body, clase, username, enlace } : Props) => {
  return (
    <>
      <a href={enlace} target='_blank'>
        <div className='btn'>
          <i className={clase}></i>
          <div className='platform_name'>
            <div className='platform_h1'>{body}</div>
            <div className='platform_p'>{username}</div>
          </div>
        </div>
      </a>
    </>
  )
}

export default Link