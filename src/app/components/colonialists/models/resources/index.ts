import { DevelopmentResourceTypes, Resource, ResourceTypes } from '../resources';

export const resourceDeckSize = 19;

const generateResources = (type: ResourceTypes, name: string): Resource[] => {
  const resources: Resource[] = [];
  for (let index = 0; index < resourceDeckSize; index++) {
    resources.push({ type, name });
  }
  return resources;
}

const generateExtensions = (): Resource[] => {
  const resources: Resource[] = [];
  const knightCardSize = 14;
  const scoreCardSize = 5;
  for (let index = 0; index < knightCardSize; index++) {
    resources.push({
      type: ResourceTypes.extension,
      name: DevelopmentResourceTypes.knight,
      properties: {
        type: DevelopmentResourceTypes.knight,
        description: 'Move the bandit. Take a resource from your opponent which have a hex where you stand the bandit.'
      }
    });
  }
  for (let index = 0; index < scoreCardSize; index++) {
    resources.push({
      type: ResourceTypes.extension,
      name: DevelopmentResourceTypes.winScore,
      properties: {
        type: DevelopmentResourceTypes.winScore,
        description: 'Get 1 win score'
      }
    });
  }
  const extensionRoad: Resource = {
    type: ResourceTypes.extension,
    name: DevelopmentResourceTypes.roadBuilding,
    properties: {
      type: DevelopmentResourceTypes.roadBuilding,
      description: 'Build 2 new road with usual rules, but free.',
    }
  }
  const extensionInvention: Resource = {
    type: ResourceTypes.extension,
    name: DevelopmentResourceTypes.invention,
    properties: {
      type: DevelopmentResourceTypes.invention,
      description: 'Take two any resources.',
    }
  }
  const extensionMonopoly: Resource = {
    type: ResourceTypes.extension,
    name: DevelopmentResourceTypes.monopoly,
    properties: {
      type: DevelopmentResourceTypes.monopoly,
      description: 'Take one any resource type from all players.',
    }
  }
  resources.push(extensionRoad);
  resources.push(extensionRoad);
  resources.push(extensionInvention);
  resources.push(extensionInvention);
  resources.push(extensionMonopoly);
  resources.push(extensionMonopoly);
  return resources;
}

export const treeCards: Resource[] = generateResources(ResourceTypes.tree, 'tree');
export const wheatCards: Resource[] = generateResources(ResourceTypes.wheat, 'wheat');
export const sheepCards: Resource[] = generateResources(ResourceTypes.sheep, 'sheep');
export const clayCards: Resource[] = generateResources(ResourceTypes.clay, 'clay');
export const stoneCards: Resource[] = generateResources(ResourceTypes.stone, 'stone');
export const extensionCards: Resource[] = generateExtensions();
