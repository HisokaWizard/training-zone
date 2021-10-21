import { useSelector } from 'react-redux';
import {RootState} from "@/redux/rootReducer";

const gameState = (state: RootState) => state.general;

export const useGameState = () => useSelector((state: RootState) => gameState(state))