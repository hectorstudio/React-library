import React from "react";
import Private from "./Private";
import games from "./data/games";
import * as R from "ramda";

const Privates = ({ match }) => {
  let game = games[match.params.game];
  let privates = game.privates;

  if(!privates) {
    return null;
  }

  return (
    <div class="cards">
      {R.map(
        p => (
          <Private
            {...p}
          />
        ),
        privates
      )}
    </div>
  );
};

export default Privates;
