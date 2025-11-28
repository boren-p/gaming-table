import { useEffect, useState } from 'react';

export default function UseOneProduct(id) {
    const [prod, setProd] = useState(null);

    useEffect(() => {
        if (!id) return;  // evitar fetch cuando el id no existe

        fetch(`https://api-funval-g6.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProd(data))
            .catch(err => console.error("Error fetching product:", err));
        
    }, [id]);

    return prod;
}