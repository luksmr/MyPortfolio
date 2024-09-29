import Navegation from "../../../components/Header/Nav/Navegation"
import { Link } from "react-router-dom"
const Proyectos = () => {
    return (
        <>
            <Navegation />
            <div className="text-center mt-5 mb-5">
                <h2>Sección de Proyectos en Construcción</h2>
                <div className="mt-3 mb-3">
                    <p>Estamos trabajando en esta sección. ¡Vuelve pronto para más actualizaciones!</p>
                </div>
                <div className="mt-5">
                    <Link to='/' className='btn btn-info'>Volver</Link>
                </div>
                
            </div>
            

        </>
    )
}

export default Proyectos