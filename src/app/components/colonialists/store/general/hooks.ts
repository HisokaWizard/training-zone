import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

const gameState = (state: RootState) => state.general;

export const useGameState = () => useSelector((state: RootState) => gameState(state))