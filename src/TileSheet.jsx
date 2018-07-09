import React from "react";
import * as R from "ramda";
import { paper } from "./data";

import Tile from "./Tile";
import Svg from "./Svg";

import games from "./data/games";

const groupsOf = R.curry(function group(n, list) {
  return R.isEmpty(list)
    ? []
    : R.prepend(R.take(n, list), group(n, R.drop(n, list)));
});

const HEX_RATIO = 0.57735;
const RATIO = 0.966666667;

const TileSheet = ({ match }) => {
  let game = games[match.params.game];
  let height = game.info.width;
  let width = height * HEX_RATIO * 2;
  let tileHeight = height * RATIO;
  let tileWidth = width * RATIO;
  let perRow = Math.floor(paper.width / (tileWidth + 12.5));
  let ids = R.chain(k => Array(game.tiles[k]).fill(k), R.keys(game.tiles));

  let tiles = R.map(
    row => (
      <div
        className="row"
        style={{ width: `${(perRow * (tileWidth + 12.5) - 12.5) * 0.01}in` }}
      >
        {R.map(
          id => (
            <Svg
              style={{
                width: `${tileWidth * 0.01}in`,
                height: `${tileHeight * 0.01}in`
              }}
              viewBox={`-86.6025 -75 173.205 150`}
            >
              <Tile id={id} />
            </Svg>
          ),
          row
        )}
      </div>
    ),
    groupsOf(perRow, ids)
  );

  return <div className="tileSheet">{tiles}</div>;
};

export default TileSheet;
