import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemDetail;
