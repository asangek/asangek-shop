import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';

function ItemListContainer() {
  const { id } = useParams(); // Obtén el parámetro de la categoría
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        const filteredItems = id
          ? data.filter(item => item.category.toLowerCase() === id.toLowerCase())
          : data;
        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div>
      <h2>{id ? `Categoría: ${id}` : "Todos los Productos"}</h2>
      <div className="container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;