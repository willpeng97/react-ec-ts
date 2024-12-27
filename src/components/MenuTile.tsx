import { FC } from "react";
import "./MenuTile.css"

export interface Props {
  image: string;
  label: string;
  link: string;
  fnKey: string;
}

export const MenuTile:FC<Props> = ({ image, label, link }) => {
  return (
    <div className="col p-3">
      <a href={link} className="text-decoration-none ">
        <div className="btnItem border-opacity-20 rounded-3 bg-opacity-10 pt-3 pb-3 hover-effect">
          <div className="text-light text-decoration-none text-center d-block">
            <img src={image} className="cover" alt="default" />
          </div>
          <h3 className="text-center">{label}</h3>
        </div>
      </a>
    </div>
  );
};