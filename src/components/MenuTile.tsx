import { FC, useState } from "react";

export interface Props {
  image: string;
  label: string;
  link: string;
  fnKey: string;
}

export const MenuTile: FC<Props> = ({ image, label, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="col p-3">
      <a href={link} className="text-decoration-none">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? "#05356c" : "#eee",
            borderRadius: "0.375rem", // rounded-3
            paddingTop: "1rem", // pt-3
            paddingBottom: "1rem", // pb-3
            transition: "background-color 0.3s ease, color 0.3s ease",
            cursor: "pointer"
          }}
          className="border-opacity-20 bg-opacity-10"
        >
          <div className="text-light text-decoration-none text-center d-block">
            <img
              src={import.meta.env.BASE_URL + image}
              style={{
                maxWidth: "95%",
                maxHeight: "10rem",
                marginBottom: "1rem",
                height: "auto"
              }}
            />
          </div>
          <h3
            className="text-center"
            style={{
              color: hovered ? "white" : "#05356C",
              transition: "color 0.3s ease"
            }}
          >
            {label}
          </h3>
        </div>
      </a>
    </div>
  );
};