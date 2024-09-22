import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Función para obtener el detalle de un producto por ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data); // Guarda los datos del producto en el estado
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Se vuelve a ejecutar cuando cambia el ID del producto

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
