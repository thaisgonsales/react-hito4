import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    const url = "http://localhost:5000/api/pizzas"

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
    };
    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <Header />
            <div className="pizza-contenedor">
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        nombre={pizza.name}
                        precio={pizza.price}
                        ingredientes={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
