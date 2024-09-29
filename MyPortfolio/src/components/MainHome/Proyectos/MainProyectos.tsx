
import {Link} from 'react-router-dom'

const MainProyectos = () => {
  return (
    <>
    <div className='text-center'>
        <div className='mt-5 mb-3'>
            <h3>Mis Proyectos</h3>
        </div>
        <div className='mt-4 mb-5'>
            <Link to='/Proyectos' className='btn btn-warning'>Ver Proyectos</Link>
        </div>
        
    </div>
    
    </>
  )
}

export default MainProyectos