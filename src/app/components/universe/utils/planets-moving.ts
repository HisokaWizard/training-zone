import { earth, jupiter, mars, mercury, neptune, saturn, saturnRing, solar, solarShine, uranus, venus } from '..';
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
  solar.rotation.z = solarRotation(solar);
  solarShine.rotation.z = solarRotation(solarShine);
  //
  const mercuryDislocationChange = planetRotationAndMoving(mercury, mercuryConfig);
  mercury.position.x = mercuryDislocationChange.position.x;
  mercury.position.y = mercuryDislocationChange.position.y;
  mercury.rotation.z = mercuryDislocationChange.rotation.z;
  //
  const venusDislocationChange = planetRotationAndMoving(venus, venusConfig);
  venus.position.x = venusDislocationChange.position.x;
  venus.position.y = venusDislocationChange.position.y;
  venus.rotation.z = venusDislocationChange.rotation.z;
  //
  const earthDislocationChange = planetRotationAndMoving(earth, earthConfig);
  earth.position.x = earthDislocationChange.position.x;
  earth.position.y = earthDislocationChange.position.y;
  earth.rotation.z = earthDislocationChange.rotation.z;
  //
  const marsDislocationChange = planetRotationAndMoving(mars, marsConfig);
  mars.position.x = marsDislocationChange.position.x;
  mars.position.y = marsDislocationChange.position.y;
  mars.rotation.z = marsDislocationChange.rotation.z;
  //
  const jupiterDislocationChange = planetRotationAndMoving(jupiter, jupiterConfig);
  jupiter.position.x = jupiterDislocationChange.position.x;
  jupiter.position.y = jupiterDislocationChange.position.y;
  jupiter.rotation.z = jupiterDislocationChange.rotation.z;
  //
  const saturnDislocationChange = planetRotationAndMoving(saturn, saturnConfig);
  saturn.position.x = saturnDislocationChange.position.x;
  saturn.position.y = saturnDislocationChange.position.y;
  saturn.rotation.z = saturnDislocationChange.rotation.z;
  const saturnRingDislocationChange = planetRotationAndMoving(saturnRing, saturnConfig);
  saturnRing.position.x = saturnRingDislocationChange.position.x;
  saturnRing.position.y = saturnRingDislocationChange.position.y;
  saturnRing.rotation.z = saturnRingDislocationChange.rotation.z;
  //
  const uranusDislocationChange = planetRotationAndMoving(uranus, uranusConfig);
  uranus.position.x = uranusDislocationChange.position.x;
  uranus.position.y = uranusDislocationChange.position.y;
  uranus.rotation.z = uranusDislocationChange.rotation.z;
  //
  const neptuneDislocationChange = planetRotationAndMoving(neptune, neptuneConfig);
  neptune.position.x = neptuneDislocationChange.position.x;
  neptune.position.y = neptuneDislocationChange.position.y;
  neptune.rotation.z = neptuneDislocationChange.rotation.z;
}