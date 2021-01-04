import solarImg from '@models/solar_picture.jpg';
import mercuryImg from '@models/mercury_picture.jpg';
import venusImg from '@models/venus_picture.jpg';
import earthImg from '@models/earth_picture.jpg';

export interface PlanetInformation {
  image: any;
  content: string;
}

export const solarInfo: PlanetInformation = {
image: solarImg,
content: `
  The Sun is a tabloid newspaper. As a broadsheet, it was founded in 1964 as a successor to the Daily Herald,
  and became a tabloid in 1969 after it was purchased by its current owner.
  It is published by the News Group Newspapers division of News UK, itself a wholly owned subsidiary of Rupert Murdoch's News Corp.
  Since The Sun on Sunday was launched in February 2012, the paper has been a seven-day operation.
  The Sun previously had the largest circulation of any daily newspaper in the United Kingdom but it was overtaken by rival Metro in March 2018.
  In 2012, The Sun on Sunday was launched to replace the closed News of the World, employing some of its former journalists.
  The average circulation for The Sun on Sunday in September 2019 was 1,052,465.
  In February 2020, it had an average daily circulation of 1.2 million.
  The Sun has been involved in many controversies in its history, including its coverage of the 1989 Hillsborough football stadium disaster.
  Regional editions of the newspaper for Scotland (The Scottish Sun), Northern Ireland (The Sun),
  and the Republic of Ireland (The Irish Sun) are published in Glasgow, Belfast, and Dublin, respectively.
  There is currently no separate Welsh edition of The Sun; readers in Wales get the same edition as readers in England.
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
  as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately 116 days.
  Mercury rotates in a way that is unique in the Solar System. It is tidally locked with the Sun in a 3:2 spin–orbit resonance,
  meaning that relative to the fixed stars, it rotates on its axis exactly three times for every two revolutions it makes around the Sun.
  As seen from the Sun, in a frame of reference that rotates with the orbital motion, it appears to rotate only once every two Mercurian years.
  An observer on Mercury would therefore see only one day every two Mercurian years.
  Mercury's axis has the smallest tilt of any of the Solar System's planets (about ​1⁄30 degree).
  Its orbital eccentricity is the largest of all known planets in the Solar System at perihelion,
  Mercury's distance from the Sun is only about two-thirds (or 66%) of its distance at aphelion.
  Mercury's surface appears heavily cratered and is similar in appearance to the Moon's,
  indicating that it has been geologically inactive for billions of years.
  Having almost no atmosphere to retain heat,
  it has surface temperatures that vary diurnally more than on any other planet in the Solar System,
  ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F) during the day across the equatorial regions.
  The polar regions are constantly below 180 K (−93 °C; −136 °F). The planet has no known natural satellites.
  Two spacecraft have visited Mercury: Mariner 10 flew by in 1974 and 1975; and MESSENGER,
  launched in 2004, orbited Mercury over 4,000 times in four years before exhausting its fuel and crashing into the planet's surface on April 30,
  2015. The BepiColombo spacecraft is planned to arrive at Mercury in 2025.`,
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
  even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid,
  preventing its surface from being seen from space in visible light. It may have had water oceans in the past,
  but these would have vaporized as the temperature rose due to a runaway greenhouse effect.
  The water has probably photodissociated,
  and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field.
  Venus' surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism.
  As one of the brightest objects in the sky, Venus has been a major fixture in human culture for as long as records have existed.
  It has been made sacred to gods of many cultures,
  and has been a prime inspiration for writers and poets as the "morning star" and "evening star".
  Venus was the first planet to have its motions plotted across the sky, as early as the second millennium BC.
  Due to its proximity to Earth, Venus has been a prime target for early interplanetary exploration.
  It was the first planet beyond Earth visited by a spacecraft (Mariner 2 in 1962),
  and the first to be successfully landed on (by Venera 7 in 1970).
  Venus' thick clouds render observation of its surface impossible in visible light,
  and the first detailed maps did not emerge until the arrival of the Magellan orbiter in 1991.
  Plans have been proposed for rovers or more complex missions, but they are hindered by Venus' hostile surface conditions.
  The possibility of life on Venus has long been a topic of speculation,
  and in recent years has received active research.
  Following a 2019 observation that the light absorbance of the upper cloud layers was consistent with the presence of microorganisms,
  a September 2020 article in Nature Astronomy announced the detection of phosphine gas,
  a biomarker, in concentrations higher than can be explained by any known abiotic source.
  However, doubts have been cast on these observations due to data-processing issues and the failure to detect phosphine at other wavelengths.
  By late October 2020, re-analysis of data with a proper subtraction of background did not result in the detection of phosphine.`,
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
  According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.
  Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface,
  leading to the proliferation of anaerobic and, later, aerobic organisms.
  Some geological evidence indicates that life may have arisen as early as 4.1 billion years ago.
  Since then, the combination of Earth's distance from the Sun,
  physical properties and geological history have allowed life to evolve and thrive.
  In the history of life on Earth, biodiversity has gone through long periods of expansion,
  occasionally punctuated by mass extinctions. Over 99% of all species that ever lived on Earth are extinct.
  Almost 8 billion humans live on Earth and depend on its biosphere and natural resources for their survival.
  Humans increasingly impact Earth's hydrology, atmospheric processes and other life.
  Earth's atmosphere consists mostly of nitrogen and oxygen. Tropical regions receive more energy from the Sun than polar regions,
  which is redistributed by atmospheric and ocean circulation. Greenhouse gases also play an important role in regulating the surface temperature.
  A region's climate is not only determined by latitude, but also by its proximity to moderating oceans and height among other factors.
  Extreme weather, such as tropical cyclones and heat waves, occurs in most areas and has a large impact on life.
  Earth's gravity interacts with other objects in space, especially the Sun and the Moon,
  which is Earth's only natural satellite. Earth orbits around the Sun in about 365.25 days.
  Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth.
  The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis,
  and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest and most massive of the four rocky planets.`
};