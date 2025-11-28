import React, { useEffect, useState } from 'react';

export default function UseProductsCards() {
    const [prods, setProds] = useState([]);
  
        useEffect(() => {
            fetch("https://api-funval-g6.onrender.com/products/?skip=0&limit=100&category=gaming%20table")
                .then(r => r.json())
                .then(data => setProds(data));
        }, [prods]);

    return  prods ;}