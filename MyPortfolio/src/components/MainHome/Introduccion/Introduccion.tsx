
import { misDatos, introduccion } from '../../../constants/constants'
import profileLuk from '../../../assets/profileLuk.jpg'
import { Image} from 'react-bootstrap'

const Introduccion = () => {
    return (
        <>
            <div className='text-center'>
                <div className='mt-5 my-5 '>
                    <h2>{`${misDatos.nombre} ${misDatos.apellido}`}</h2>
                </div>
                <div className='mt-5 my-5 '>
                    <Image src={profileLuk} roundedCircle />
                </div>
            </div>
            <div className='container'>
                
                    <div className='col-md-12 d-flex align-items-center justify-content-center text-center'>

                        <h3>{introduccion}</h3>
                    </div>
                    
                

            </div>

        </>
    )
}

export default Introduccion