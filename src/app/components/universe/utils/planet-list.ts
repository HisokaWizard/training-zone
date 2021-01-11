export interface PlanetMap {
  id: number;
  name: string;
}

const planetList: PlanetMap[] = [];

export const addPlanetToList = (id: number, name: string) => {
  planetList.push({id, name});
}

export const getPlanetList = () => {
  return planetList;
}