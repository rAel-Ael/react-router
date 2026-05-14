const APIURL = 'https://fakestoreapi.com/products'
import { useState } from "react";
import { useEffect } from "react";



function Product() {

    const [prodotti, setProduct] = useState([]);

    const fetchprodotti = () => {
        return fetch(APIURL)
            .then(response => response.json());
    };

    useEffect(() => {

        fetchprodotti()
            .then(data => {
                console.log(data);
                setProduct(data);
            });

    }, []);

    return (
        <div>
            <h1>Prodotti</h1>

            {prodotti.map(prodotto => (
                <div key={prodotto.id}>
                    <h3>{prodotto.title}</h3>
                    <p>{prodotto.price} €</p>
                    <img src={prodotto.image} alt={prodotto.title} width="100" />
                </div>
            ))}
        </div>
    );
}

export default Product;