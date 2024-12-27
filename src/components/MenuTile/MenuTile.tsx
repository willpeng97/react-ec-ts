import { FC } from "react";
import styles from "./MenuTile.module.css"

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
        <div className={`${styles.btnItem} border-opacity-20 rounded-3 bg-opacity-10 pt-3 pb-3 ${styles.hoverEffect}`}>
          <div className="text-light text-decoration-none text-center d-block">
            <img src={image} className={styles.cover} alt="default" />
          </div>
          <h3 className="text-center">{label}</h3>
        </div>
      </a>
    </div>
  );
};