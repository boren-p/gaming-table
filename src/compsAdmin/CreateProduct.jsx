import React, { useReducer } from 'react';
import Loading from '../components/Loading';

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
    
const CreateProduct = () => {
    const [state, dispatch] = useReducer(reducer, inState)

    function isError() {
        return (
            console.error("error")
        );
    }

    function isLoading() {
        return (
            <Loading/>
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
        if(state.loading){
            return isLoading;
        }

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
        <div className='w-100 border border-red-700 bg-red-700 rounded-2xl'>
            <h2 className='font-bold text-white text-center m-5'>NUEVO PRODUCTO</h2>
            <form onSubmit={handleSubmit}
                className='flex flex-col gap-3 m-5'>
                <input type="text" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Nombre' 
                    value={state.name} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "name", 
                        value: e.target.value 
                        })}/>
                <input type="text" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Descripcion' 
                    value={state.descript} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "descript", 
                        value: e.target.value 
                        })}/>
                <input type="number" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Precio' 
                    value={state.price} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "price", 
                        value: e.target.value 
                        })}/>
                <input type="number" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Stock' 
                    value={state.stock} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "stock", 
                        value: e.target.value 
                        })}/>
                <input type="text" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Categoria' 
                    value={state.category} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "category", 
                        value: e.target.value 
                        })}/>
                <input type="text" 
                    className='bg-red-400 h-10 p-2' 
                    placeholder='Imagen (url)' 
                    value={state.image} 
                    onChange={ e => dispatch({ 
                        type: "change", 
                        field: "image", 
                        value: e.target.value 
                        })}/>
                <button type="submit" className='text-white'>CREAR</button>
            </form>
        </div>
    );
}

export default CreateProduct;
