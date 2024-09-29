import { footer } from "../../constants/constants"
import { Link } from 'react-router-dom'
import '../../css/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="custom-footer">
    <div className="d-flex justify-content-center">
        <div className="w-50 text-center p-3">
          <p>{footer}</p>
          <Link to='/Contacto'>Contacto</Link>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Footer