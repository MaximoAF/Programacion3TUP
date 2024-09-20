import { renderCategories } from "./src/services/categories";
import { setInLocalStorage } from "./src/persistence/localStorage";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

// Pre-Carga de datos
const productosExample = [
    { id: "Pre-Load" + 1, nombre: "Doble queso", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s", precio: "5500", categories: "Hamburguesas", },
    { id: "Pre-Load" + 2, nombre: "Triple bacon", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s", precio: "6500", categories: "Hamburguesas", },
    { id: "Pre-Load" + 3, nombre: "Papas fritas clásicas", imagen: "https://www.lanacion.com.ar/resizer/v2/papas-VOAEM2PXUBCEZBSCHAQHKET3DU.jpg?auth=1dfe7dacea906c64b53834d43aa5abdfffb808d452a2544d1a7cf76848ecb842&width=880&height=586&quality=70&smart=true", precio: "2000", categories: "Papas", },
    { id: "Pre-Load" + 4, nombre: "Papas con cheddar", imagen: "https://www.lanacion.com.ar/resizer/v2/papas-VOAEM2PXUBCEZBSCHAQHKET3DU.jpg?auth=1dfe7dacea906c64b53834d43aa5abdfffb808d452a2544d1a7cf76848ecb842&width=880&height=586&quality=70&smart=true", precio: "3000", categories: "Papas", },
    { id: "Pre-Load" + 5, nombre: "Coca-Cola 500ml", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBYrjfEuRXwApW3i8WzxvoE5e1b8KLWoHgg&s", precio: "1500", categories: "Gaseosas", },
    { id: "Pre-Load" + 6, nombre: "Sprite 500ml", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBYrjfEuRXwApW3i8WzxvoE5e1b8KLWoHgg&s", precio: "1500", categories: "Gaseosas", },
    { id: "Pre-Load" + 7, nombre: "Fanta 500ml", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBYrjfEuRXwApW3i8WzxvoE5e1b8KLWoHgg&s", precio: "1500", categories: "Gaseosas", },
    { id: "Pre-Load" + 8, nombre: "Hamburguesa BBQ", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s", precio: "7000", categories: "Hamburguesas", },
    { id: "Pre-Load" + 9, nombre: "Papas rústicas", imagen: "https://www.lanacion.com.ar/resizer/v2/papas-VOAEM2PXUBCEZBSCHAQHKET3DU.jpg?auth=1dfe7dacea906c64b53834d43aa5abdfffb808d452a2544d1a7cf76848ecb842&width=880&height=586&quality=70&smart=true", precio: "2500", categories: "Papas", },
    { id: "Pre-Load" + 10, nombre: "Hamburguesa Veggie", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s", precio: "6000", categories: "Hamburguesas", },
];
productosExample.forEach(obj => {
  setInLocalStorage(obj)
});

/* ===APLICACION=== */
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};
export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

// HEADER
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
  openModal();
});

// ButtonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});

  