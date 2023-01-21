import { Link } from "react-router-dom"

export const Item = ({producto}) => {
  return (
    <div key={producto.id} className='card  shadow text-center'> 
                <div className="card-header">{producto.name}</div>
                <div className="card-body">
                    <img src={producto.foto} className='w-100' />
                    <h6>Stock: {producto.stock}</h6>    
                </div>
                <div className="card-footer">
                    <Link to={`/detail/${producto.id}`}>
                        <button className="btn btn-outline-dark w-100"> Ir al detalle</button>
                    </Link>
                                                                                            
                </div>
            </div>
  )
}
