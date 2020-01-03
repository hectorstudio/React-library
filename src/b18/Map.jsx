import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import games from "../data/games";

import Map from "../map/Map";
import Svg from "../Svg";

import HexContext from "../context/HexContext";
import GameContext from "../context/GameContext";

import { getMapData } from "../map/util";

const B18Map = ({ coords }) => {
  let params = useParams();
  let game = games[params.game];

  // Get map data
  let variation = Number(params.variation) || 0;
  let data = getMapData(game, coords, 100, variation);

  return (
    <GameContext.Provider value={params.game}>
    <HexContext.Provider
      value={{
        width: 100,
        rotation: data.horizontal ? 0 : 90
      }}
    >
      <div className="map">
        <Svg width={data.totalWidth} height={data.totalHeight}>
          <Map game={game} variation={variation} hexWidth={data.hexWidth} />
        </Svg>
        <style>{`@media print {@page {size: ${data.printWidth} ${data.printHeight};}}`}</style>
      </div>
    </HexContext.Provider>
    </GameContext.Provider>
  );
};

const mapStateToProps = state => ({
  coords: state.config.coords
});

export default connect(mapStateToProps)(B18Map);
