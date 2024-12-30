import { FC } from "react";
import { MenuTile, Props as TileProps } from "../components/MenuTile";

export type Tile = TileProps;

interface Props {
    tiles: Tile[]
}


export const Home: FC<Props> = ({tiles}) => {
  return (
    <div className="container">
      <div id="menu" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 text-light py-5">
        {tiles.map((tile) => (
          <MenuTile {...tile}/>
        ))}
      </div>
    </div>
  );
};
