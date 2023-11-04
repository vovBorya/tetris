import React, {useContext} from 'react'
import {IGameContext} from "../types";
import {DEFAULT_FIELD_MATRIX} from "../constants";

export const DEFAULT_GAME_CONTEXT_VALUES: IGameContext = {
  field: DEFAULT_FIELD_MATRIX
}

const GameContext = React.createContext<IGameContext>(DEFAULT_GAME_CONTEXT_VALUES)

export const GameContextProvider = GameContext.Provider;

export const useGameContext = () => useContext<IGameContext>(GameContext)
