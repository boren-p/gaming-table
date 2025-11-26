import React, { useReducer } from 'react';

    const inState = {
        name:"",
        descript:"",
        precio:0,
        stock:0,
        category:"",
        image:""
    }

    function reducer (state, action){
        switch (action.type) {
            case value:
                
                break;
            default:
                break;
        }
    }
const CreateProduct = () => {
    const [state, dispatch] = useReducer(reducer, inState)

    async function CreateProd(e) {
        
    }
    return (
        <div className='w-100 border border-red-700 bg-red-700 rounded-2xl'>
            <h2 className='font-bold text-center m-5'>NUEVO PRODUCTO</h2>
            <form action="submit" className='flex flex-col gap-3 m-5'>
                <input type="text" className='bg-red-400 h-10 p-2' placeholder='Nombre'/>
                <input type="text" className='bg-red-400 h-10 p-2' placeholder='Descripcion'/>
                <input type="number" className='bg-red-400 h-10 p-2' placeholder='Precio'/>
                <input type="number" className='bg-red-400 h-10 p-2' placeholder='Stock'/>
                <input type="text" className='bg-red-400 h-10 p-2' placeholder='Categoria'/>
                <input type="text" className='bg-red-400 h-10 p-2' placeholder='Imagen (url)'/>
                <button className='text-white'>Crear</button>
            </form>
        </div>
    );
}

export default CreateProduct;
