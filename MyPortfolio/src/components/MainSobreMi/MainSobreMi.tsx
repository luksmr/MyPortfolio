import { sobreMi, sobreMi2 } from "../../constants/constants"
import Header from "../Header/Header"
import {Link} from 'react-router-dom'

const MainSobreMi = () => {
    return (
        <>
            <Header/>
            <div className="d-flex justify-content-center">
                <div className=" w-75 text-center mt-5 mb-5">
                    <div className="mt-5 mb-5">
                        <h3>{sobreMi}</h3>
                    </div>
                    <div className="mt-5 mb-5">
                        <h3>{sobreMi2}</h3>
                    </div>
                </div>
            </div>
            <div className="text-center">
            <Link to='/' className='btn btn-info'>Volver</Link>
            </div>
            


        </>
    )
}

export default MainSobreMi