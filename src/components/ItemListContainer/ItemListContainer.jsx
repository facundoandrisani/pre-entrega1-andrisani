import { ItemList } from "../ItemList/ItemList"
import { Navbar } from "../Navbar/Navbar"

export const ItemListContainer = ({ greeting}) => {
    return(
        <div>
            <Navbar></Navbar>
            <h1>{greeting}</h1>
            <ItemList/>
        </div>
    )
}