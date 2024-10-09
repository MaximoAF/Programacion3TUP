import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
  handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
  const { values, handleChanges, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: 0,
  });

  const handleSubmitForm = () => {
    handleAddProduct(values);
    resetForm();
  };

  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingresar nombre del producto"
          value={values.nombre}
          onChange={handleChanges}
        />
      </Form.Group>
      <Form.Group controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="URL de la imagen"
          value={values.imagen}
          onChange={handleChanges}
        />
      </Form.Group>
      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingresar el precio del producto"
          value={values.precio}
          onChange={handleChanges}
        />
      </Form.Group>
      <div className="d-flex justify-content-center m-4">
        <Button onClick={handleSubmitForm} variant='primary'>
          Enviar Producto
        </Button>
      </div>
    </Form>
  );
};
