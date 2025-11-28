import React, { useReducer } from 'react';
import Loading from '../components/Loading';
import UseOneProduct from '../hooks/useOneProduct';

    const inState = {
        name:"",
        descript:"",
        price:0,
        stock:0,
        category:"",
        image:"",

        loading:false,
        error:null,
    }

    function reducer (state, action){
        switch (action.type) {
            case "change": return {
                ...state,
                [action.field]: action.value
            }
            case "submit": return {
                ...state, 
                loading:true,
            }
            case "success": return {
                ...state,
                loading: false
            }
            case "error": return {
                ...state,
                loading:false,
                error:true,
            }
            case "reset": return inState;
            default:
                break;
        }
    }
    
const EditProduct = (id) => {
    const [state, dispatch] = useReducer(reducer, inState)
    const [prod] = UseOneProduct(id)

    function isError() {
        return (
            console.error("error")
        );
    }

    async function handleSubmit(e) {
        const token = localStorage.getItem("token");

        e.preventDefault();
        // iniciar estado submit
        dispatch({ type: "submit" });

        // verificar campos vacios.
        if( state.name.trim() === "" 
            ||state.descript.trim() ===  "" 
            ||state.price <= 0 
            ||state.stock <= 0 
            ||state.category.trim() ===  "" 
            ||state.image.trim() ===  ""
        ){
            dispatch({ type: "error" });
            isError();
            alert("Los campos están vacios. Favor rellenar por lo menos un campo de texto.")
            return;
        }

        // verificar estado de carga.

        // peticion a la API para enviar los datos del producto.
        try {
            const answ = await fetch("https://api-funval-g6.onrender.com/products/",{
                method: 'POST',
                 headers:{ 
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json", 
                },
                 body: JSON.stringify({
                    name : state.name,
                    description : state.descript,
                    price : state.price,
                    stock : state.stock,
                    category : state.category,
                    image_url : state.image
                }),})
        } catch (error) {
            dispatch({type : "error"});
            console.error(error.message);
        } finally {
            dispatch({type : "success"});
            dispatch({ type: "reset" });
        }
        
    }
    
    return (
        <div className='fixed z-50 top-0 left-0 w-full mt-20'>
            <div className='fixed z-40 top-0 left-0 bg-neutral-800 h-screen w-screen opacity-50'></div>
            <div className='bg-white relative z-50'>
                <h2 className=" text-3xl font-bold mb-8 text-center text-deep-forest-green">Edit Product</h2>
                <form onSubmit={handleSubmit}
                className='flex flex-col gap-3 m-5'>
                <div className='flex gap-5 w-full'>
                    <div className='flex flex-col gap-3 w-full'>
                <input type="text" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Nombre' 
                    value={state.name} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "name", 
                        value: e.target.value 
                        })}/>
                <input type="text" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Descripcion' 
                    value={state.descript} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "descript", 
                        value: e.target.value 
                        })}/>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                <input type="number" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Precio' 
                    value={state.price} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "price", 
                        value: Number(e.target.value) 
                        })}/>
                <input type="number" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Stock' 
                    value={state.stock} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "stock", 
                        value: Number(e.target.value) 
                        })}/>
                    </div>
                </div>
                <input type="text" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Categoria' 
                    value={state.category} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "category", 
                        value: e.target.value 
                        })}/>
                <input type="text" 
                    className='bg-neutral-400 h-10 p-2' 
                    placeholder='Imagen (url)' 
                    value={state.image} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "image", 
                        value: e.target.value 
                        })}/>
                <button type="submit" className='bg-neutral-700 p-5 text-white'>Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
