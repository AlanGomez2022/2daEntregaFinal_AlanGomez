import { Link } from "react-router-dom"
import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {
  return (
    <div className="itemListContainer">
        {                
            productos.map((producto) =><Item key={producto.id} producto={producto}/>)
        }
    </div>
    )
}
