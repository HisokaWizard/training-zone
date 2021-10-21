import { useSelector } from 'react-redux';
import {RootState} from "@/redux/rootReducer";

const filterState = (state: RootState) => state.filterEmployee;

export const useFilterState = () => useSelector((state: RootState) => filterState(state))