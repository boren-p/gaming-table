import React, { useState, useEffect } from 'react';
import UseProductsCards from "../hooks/useProductsCards";
import Loading from '../components/Loading';
import EditProduct from './EditProduct';

const ProductM = () => {
  const  prods  = UseProductsCards();
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idProd, setIdProd] = useState(0);


  function openModal(id){
    setIdProd(id);
    setShowEdit(true);
  }

  useEffect((id)=>{
    console.log (idProd);
  },[idProd])

  async function deleteProd(id) {
    const token = localStorage.getItem("token")
    console.log("Token:", token);
    const answ = prompt("¿Está seguro que desea eliminar el producto? (sí/no)");
    //VALIDACION
    const rta = answ ? answ.trim().toLowerCase() : "";
    if (rta === "sí" || rta === "si"){
      console.log("dijo que si")
      try {
        setLoading(true);
        const deleteProd = await fetch(`https://api-funval-g6.onrender.com/products/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
        if(deleteProd.ok) alert("Producto eliminado con exito.")
      } catch (error) {
        alert(`${error}`)
      }finally{
        setLoading(false);
        window.location.reload();
      }
      
    } else if (rta === "no"){
      console.log("dijo que no")
    }
  }


    return (
        <>
        <section className="py-16 w-full px-4 md:px-8">
          {loading && <Loading/>}
          {showEdit && (<EditProduct product={idProd}/>)}
          <h2 className="text-3xl font-bold mb-8 text-center text-deep-forest-green">Product Manager</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {prods.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-rustic-gold/20">
                <div style={{backgroundImage:`url(${item.image_url})`}} className="bg-center bg-contain bg-no-repeat h-80 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  {!item.image_url?`Image for ${item.name}`:null}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">
                  {item.stock} . ${item.price}
                </p>
                <div className='flex justify-between'>
                  <button onClick={()=>{deleteProd(item.id)}} className="text-red-600 font-semibold hover:text-rustic-gold transition-colors">
                  DELETE
                </button>

                <button onClick={()=>{openModal(item.id)}} className="text-rich-mahogany-brown font-semibold hover:text-rustic-gold transition-colors">
                  Edit &rarr;
                </button>
                
                </div>
              </div>
            ))}
          </div>
        </section>
        </>
    );
}

export default ProductM;
