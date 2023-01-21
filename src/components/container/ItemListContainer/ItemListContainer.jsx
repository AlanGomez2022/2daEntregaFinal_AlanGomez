import { useState, useEffect } from "react" // estos son los hook
import { Link, useParams } from "react-router-dom"
import { ItemList } from "../../ItemList/ItemList"
import { gFetch } from "../../utils/gFetch"
import './itemListContainer.css'

export const ItemListContainer = ( ) => {
    const [productos,setProductos] = useState([])
    const [loading, setLoading] = useState (true)
    const {categoriaId} = useParams()
  

    useEffect (() => {
        setLoading(true)
        if (categoriaId){
            gFetch()
                .then (respuestaPromesa => {
                    setProductos (respuestaPromesa.filter(items => items.categoria == categoriaId))
                })
                .catch (err => console.log (err))
                .finally (() =>setLoading(false))
        }else{
            gFetch()
                .then (respuestaPromesa => {
                    setProductos (respuestaPromesa)
                })
                .catch (err => console.log (err))
                .finally (() =>setLoading(false))
        }
        
    },[categoriaId])
    
   console.log(categoriaId)
    
    return (
        <div className="w-100 ">
        

            {   loading 
                ?
                <div className="loading">
                    <img className='w-5' src="/public/loading.gif" alt='cargando'/>
                </div>
                :
               <ItemList productos={productos}/>
            }    
        </div>
  )
}
