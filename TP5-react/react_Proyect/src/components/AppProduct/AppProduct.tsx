import { useState } from "react";
import { FormProduct } from "./FormProduct/FormProduct";
import { Header } from "./Header/Header";
import { LIstProducts } from "./ListProducts/LIstProducts";

interface ItemProduct {
  nombre: string;
  imagen: string;
  precio: number;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };

  return (
    <>
      <Header />
      <h2 className="text-center">Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <LIstProducts arrItems={products} />
      ) : (
        <h3 className="text-center m-4">No hay productos!</h3>
      )}
    </>
  );
};
