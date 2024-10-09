import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct {
  nombre: string;
  imagen: string;
  precio: number;
}
interface IPropsListProducts {
  arrItems: ItemProduct[];
}

export const LIstProducts: FC<IPropsListProducts> = ({ arrItems }) => {
  return (
    <div
      className="p-4 m-3 border rounded d-grid gap-2 "
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {arrItems.map((el, i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={el.imagen}
            style={{ width: "100%", aspectRatio: "1 / 1" }}
          />
          <Card.Body>
            <Card.Title>{el.nombre}</Card.Title>
            <Card.Text>${el.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
