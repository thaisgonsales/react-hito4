import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
    return (
        <div>
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
