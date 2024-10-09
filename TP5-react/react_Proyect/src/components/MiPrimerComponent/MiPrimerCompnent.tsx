import { FC } from "react";

interface IPropsMiPrimerComponent {
  text: string;
  color: string;
  fontSize?: number;
}

export const MiPrimerCompnent: FC<IPropsMiPrimerComponent> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <div>
      <p style={{ color: `${color}`, fontSize: `${fontSize || 1}rem` }}> {text} </p>
    </div>
  );
};
