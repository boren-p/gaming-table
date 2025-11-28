import React, { useEffect, useState } from 'react';

export default function UseOneProduct(id) {
    const [prod, setProd] = useState([]);
  
        useEffect(() => {
            fetch(`https://api-funval-g6.onrender.com/products/${id}`)
                .then(r => r.json())
                .then(data => setProd(data));
        }, [prod]);

    return  prod ;}