import solarImg from '@models/solar_picture.jpg';
import mercuryImg from '@models/mercury_picture.jpg';
import venusImg from '@models/venus_picture.jpg';
import earthImg from '@models/earth_picture.jpg';
import marsImg from '@models/mars_picture.jpg';

export interface PlanetInformation {
  image: any;
  content: string;
}

export const solarInfo: PlanetInformation = {
image: solarImg,
content: `
  The Sun is the star at the center of the Solar System.
  It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core,
  radiating the energy mainly as visible light and infrared radiation.
  It is by far the most important source of energy for life on Earth.
  Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth.
  Its mass is about 330,000 times that of Earth, and accounts for about 99.86% of the total mass of the Solar System.
  Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%),
  with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
`};

export const mercuryInfo: PlanetInformation = {
  image: mercuryImg,
  content: `Mercury is the smallest and closest planet to the sun in the Solar System.
  Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.
  It is named after the Greek god Hermes (Ερμής), translated into Latin Mercurius Mercury, god of commerce, messenger of the gods,
  mediator between gods and mortals.
  Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet,
  and its apparent distance from the Sun as viewed from Earth never exceeds 28°.
  This proximity to the Sun means the planet can only be seen near the western horizon after sunset or eastern horizon before sunrise,
  usually in twilight. At this time, it may appear as a bright star-like object, but is often far more difficult to observe than Venus.
  The planet telescopically displays the complete range of phases, similar to Venus and the Moon,
  as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately 116 days.`,
};

export const venusInfo: PlanetInformation = {
  image: venusImg,
  content: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
  As the second-brightest natural object in Earth's night sky after the Moon,
  Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.
  Venus lies within Earth's orbit, and so never appears to venture far from the Sun,
  either setting in the west just after dusk or rising in the east a bit before dawn.
  Venus orbits the Sun every 224.7 Earth days. With a rotation period of 243 Earth days,
  it takes longer to rotate about its axis than any other planet in the Solar System by far,
  and does so in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east).
  Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.
  Venus is a terrestrial planet and is sometimes called Earth's "sister planet" because of their similar size,
  mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects.
  It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide.
  The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth,
  or roughly the pressure at 900 m (3,000 ft) underwater on Earth. Venus has, by far,
  the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F),
  even though Mercury is closer to the Sun.`,
}

export const earthInfo: PlanetInformation = {
  image: earthImg,
  content: `Earth is the third planet from the Sun and the only astronomical object known to harbor life.
  About 29% of Earth's surface is land consisting of continents and islands.
  The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water,
  which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice.
  Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years.
  Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field,
  and a convecting mantle that drives plate tectonics.
  According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.`
};

export const marsInfo: PlanetInformation = {
  image: marsImg,
  content: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.
  In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".
  The latter refers to the effect of the iron oxide prevalent on Mars's surface,
  which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
  Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys,
  deserts and polar ice caps of Earth.`
};