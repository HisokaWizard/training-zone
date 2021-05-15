export enum ResourceTypes {
  tree = 'tree',
  clay = 'clay',
  wheat = 'wheat',
  sheep = 'sheep',
  stone = 'stone',
  extension = 'extension',
}

export enum DevelopmentResourceTypes {
  knight = 'knight',
  winScore = 'winScore',
  roadBuilding = 'roadBuilding',
  invention = 'invention',
  monopoly = 'monopoly',
}

export interface Resource {
  type: ResourceTypes;
  name: string;
  properties?: {
    type: DevelopmentResourceTypes;
    description: string;
  }
}