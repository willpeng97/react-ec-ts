import { FC } from "react";
import { MenuTile, Props as TileProps } from "../components/MenuTile";

export type Tile = TileProps;

interface Props {
    tiles: Tile[]
}


export const Home: FC<Props> = ({tiles}) => {
  return (
    <div className="container">
      <div id="menu" className="row row-cols-2 row-cols-lg-4 g-2 text-light py-2">
        {tiles.map((tile) => (
          <MenuTile {...tile}/>
        ))}
      </div>
    </div>
  );
};
