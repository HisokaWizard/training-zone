// Scene state
export interface SceneState {
  stopAction: boolean;
  isSolarSystem: boolean;
}

export const sceneState: SceneState = {
  stopAction: false,
  isSolarSystem: true,
} as const;
//

export const addStopperBtn = (sceneState: SceneState): HTMLButtonElement => {
  const btnElement = document.createElement('button');
  btnElement.id = 'stopper';
  btnElement.classList.add('solarBtn');
  btnElement.textContent = 'Stop actions';
  btnElement.addEventListener('click', (event) => stopSceneClickHandler(event, sceneState));
  document.body.appendChild(btnElement);
  return btnElement;
}

const stopSceneClickHandler = (event: MouseEvent, sceneState: SceneState) => {
  const element: HTMLButtonElement = (event.target as HTMLButtonElement);
  if (element.textContent === 'Stop actions') {
    element.textContent = 'Run actions';
    sceneState.stopAction = true;
  } else {
    element.textContent = 'Stop actions';
    sceneState.stopAction = false;
  }
}

export const btnForSolarSystem = (stopper: HTMLButtonElement, backToSolar: HTMLButtonElement) => {
  stopper.style.display = 'block';
  backToSolar.style.display = 'none';
}

export const btnForCard = (stopper: HTMLButtonElement, backToSolar: HTMLButtonElement) => {
  stopper.style.display = 'none';
  backToSolar.style.display = 'block';
}