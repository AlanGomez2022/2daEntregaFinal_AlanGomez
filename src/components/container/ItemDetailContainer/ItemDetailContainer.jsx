import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Detail } from "../../Detail/Detail"
import { ItemDetail } from "../../ItemDetail/ItemDetail"
import { gFetch } from "../../utils/gFetch"


export const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const {detailId} = useParams()
    const [loading, setLoading] = useState(true)
    
    console.log(detailId)
    useEffect(()=>{
        gFetch (detailId)
            .then(resp => setProducto(resp))
            .finally(()=>setLoading(false))
    }, [loading])
        console.log(loading )
    return (
        loading 
        ?
            <div className="loading">
                <img className='w-5' src="/public/loading.gif" alt='cargando'/>
            </div>
        :
        <Detail producto={producto}/>
    )
}
