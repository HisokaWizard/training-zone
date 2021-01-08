import { solarSystem } from '..';
import { earthConfig } from '../planets/earth';
import { jupiterConfig } from '../planets/jupiter';
import { marsConfig } from '../planets/mars';
import { mercuryConfig } from '../planets/mercury';
import { neptuneConfig } from '../planets/neptune';
import { saturnConfig } from '../planets/saturn';
import { solarRotation } from '../planets/solar';
import { uranusConfig } from '../planets/uranus';
import { venusConfig } from '../planets/venus';
import { planetRotationAndMoving } from './math';

export const planetMoving = () => {
  solarSystem.solar.rotation.z = solarRotation(solarSystem.solar);
  solarSystem.solarShine.rotation.z = solarRotation(solarSystem.solarShine);
  //
  const mercuryDislocationChange = planetRotationAndMoving(solarSystem.mercury, mercuryConfig);
  solarSystem.mercury.position.x = mercuryDislocationChange.position.x;
  solarSystem.mercury.position.y = mercuryDislocationChange.position.y;
  solarSystem.mercury.rotation.z = mercuryDislocationChange.rotation.z;
  //
  const venusDislocationChange = planetRotationAndMoving(solarSystem.venus, venusConfig);
  solarSystem.venus.position.x = venusDislocationChange.position.x;
  solarSystem.venus.position.y = venusDislocationChange.position.y;
  solarSystem.venus.rotation.z = venusDislocationChange.rotation.z;
  //
  const earthDislocationChange = planetRotationAndMoving(solarSystem.earth, earthConfig);
  solarSystem.earth.position.x = earthDislocationChange.position.x;
  solarSystem.earth.position.y = earthDislocationChange.position.y;
  solarSystem.earth.rotation.z = earthDislocationChange.rotation.z;
  //
  const marsDislocationChange = planetRotationAndMoving(solarSystem.mars, marsConfig);
  solarSystem.mars.position.x = marsDislocationChange.position.x;
  solarSystem.mars.position.y = marsDislocationChange.position.y;
  solarSystem.mars.rotation.z = marsDislocationChange.rotation.z;
  //
  const jupiterDislocationChange = planetRotationAndMoving(solarSystem.jupiter, jupiterConfig);
  solarSystem.jupiter.position.x = jupiterDislocationChange.position.x;
  solarSystem.jupiter.position.y = jupiterDislocationChange.position.y;
  solarSystem.jupiter.rotation.z = jupiterDislocationChange.rotation.z;
  //
  const saturnDislocationChange = planetRotationAndMoving(solarSystem.saturn, saturnConfig);
  solarSystem.saturn.position.x = saturnDislocationChange.position.x;
  solarSystem.saturn.position.y = saturnDislocationChange.position.y;
  solarSystem.saturn.rotation.z = saturnDislocationChange.rotation.z;
  const saturnRingDislocationChange = planetRotationAndMoving(solarSystem.saturnRing, saturnConfig);
  solarSystem.saturnRing.position.x = saturnRingDislocationChange.position.x;
  solarSystem.saturnRing.position.y = saturnRingDislocationChange.position.y;
  solarSystem.saturnRing.rotation.z = saturnRingDislocationChange.rotation.z;
  //
  const uranusDislocationChange = planetRotationAndMoving(solarSystem.uranus, uranusConfig);
  solarSystem.uranus.position.x = uranusDislocationChange.position.x;
  solarSystem.uranus.position.y = uranusDislocationChange.position.y;
  solarSystem.uranus.rotation.z = uranusDislocationChange.rotation.z;
  //
  const neptuneDislocationChange = planetRotationAndMoving(solarSystem.neptune, neptuneConfig);
  solarSystem.neptune.position.x = neptuneDislocationChange.position.x;
  solarSystem.neptune.position.y = neptuneDislocationChange.position.y;
  solarSystem.neptune.rotation.z = neptuneDislocationChange.rotation.z;
}