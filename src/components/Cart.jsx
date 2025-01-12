import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import '../Cart.css';


const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const increaseCount = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };


    const decreaseCount = (id) => {
        setCart(cart
            .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
            .filter(item => item.count > 0)
        );
    };


    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.map(({ id, name, price, count, img }) => (
                <div key={id} className="cart-item">
                    <img src={img} alt={name} className="cart-img" />
                    <p>{name}</p>
                    <p>Precio: ${price.toLocaleString('es-CL')}</p>
                    <p>Cantidad: {count}</p>
                    <button onClick={() => increaseCount(id)}>+</button>
                    <button onClick={() => decreaseCount(id)}>-</button>
                </div>
            ))}
            <h3>Total: ${total.toLocaleString('es-CL')}</h3>
            <button>Pagar</button>
        </div>
    );
};

export default Cart;
