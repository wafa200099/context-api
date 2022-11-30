import { createContext ,useState} from "react";
const ProductContext=createContext();


export function ProductProdider({children}){
    const [items,setItems]= useState([])
    
    const AddToCart=(name,price)=>{
        setItems((prev)=>[...prev,{name,price}])
        console.log(items);

    }
    return(
        <ProductContext.Provider value={{items,AddToCart}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext