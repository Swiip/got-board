import Router from "next/router";

export const navigateToGame = game => {
  if (game.turn === 0) {
    Router.push(`/lobby/${game.uid}`);
  } else {
    Router.push(`/board/${game.uid}`);
  }
};

export const placeholder = null;
