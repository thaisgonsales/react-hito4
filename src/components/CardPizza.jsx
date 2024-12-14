
const CardPizza = ({ nombre, precio, ingredientes, img }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio.toLocaleString('es-CL')}</p>
                <p className="card-text">Ingredientes: {ingredientes.join(", ")}</p>
                <button className="btn btn-primary">Ver más</button>
                <button className="btn btn-success ms-2">Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;
