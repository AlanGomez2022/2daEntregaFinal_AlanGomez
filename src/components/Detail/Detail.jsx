import './Detail.css'

export const Detail = ({producto}) => {

  return (
    <div className="detail container-fluid w-100">
            <div className="row w-100">
                <div className="col-7 card shadow foto">
                    <img src={producto.foto} alt="foto del producto" className="w-50 card-body"/>
                </div>
                <div className="col-5">
                    <div className="card w-100 shadow">
                        <div className="card-header">
                            <h2>Nombre del producto: {producto.name}</h2>
                            <h3>Categoria: {producto.categoria}</h3>
                        </div>
                        <div className="card-body">
                            <p>Descripcion: {producto.descripcion}</p>
                        </div>
                        <div className="card-footer" >
                            <h5>Cantdad: {producto.stock}</h5>
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </div>
  )
}
