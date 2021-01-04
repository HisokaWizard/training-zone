// Scene state
export interface SceneState {
  stopAction: boolean;
}

export const sceneState: SceneState = {
  stopAction: false,
} as const;
//

export const addStopperBtn = (sceneState: SceneState) => {
  const btnElement = document.createElement('button');
  btnElement.classList.add('stopper');
  btnElement.textContent = 'Stop actions';
  btnElement.addEventListener('click', (event) => stopSceneClickHandler(event, sceneState));
  document.body.appendChild(btnElement);
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