export const cardAboutPlanet = (id: string) => {
  const card = document.createElement('div');
  card.id = id;
  card.style.position = 'fixed';
  card.style.backgroundColor = 'rgba(255,255,255,0.3)';
  card.style.width = '300px';
  card.style.height = '300px';
  card.style.top = '50%';
  card.style.left = '50%';
  card.style.zIndex = '1000';
  card.innerText = `The Sun is a tabloid newspaper. As a broadsheet, it was founded in 1964 as a successor to the Daily Herald,
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
  There is currently no separate Welsh edition of The Sun; readers in Wales get the same edition as readers in England.`
  return card;
}