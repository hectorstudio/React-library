import React from "react";
import Market from "./Market";
import games from "./data/games";

import Rounds from "./Rounds";
import Par from "./Par";

const Stock = ({ match }) => {
  let game = games[match.params.game];
  let stock = game.stock;

  if (!stock) {
    return null;
  }

  return (
    <div className="stock">
      <div className="PrintNotes">
        Stock Market is meant to be printed in <b>landscape</b> mode
      </div>
      <Market {...stock} title={game.info.title} />
      <Rounds rounds={game.rounds} />
      {stock.par && <Par par={stock.par} />}
    </div>
  );
};

export default Stock;
