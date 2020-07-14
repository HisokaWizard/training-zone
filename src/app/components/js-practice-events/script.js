function sweetDropDown() {
  const arrowDown = document.getElementById('arrow-down');
  const arrowLeft = document.getElementById('arrow-left');
  const ulElem = document.getElementsByTagName('ul');
  arrowDown.hidden = true;
  ulElem.item(0).hidden = true;

  arrowLeft.addEventListener('click', (event) => {
    arrowLeft.hidden = true;
    arrowDown.hidden = false;
    ulElem.item(0).hidden = false;
  });

  arrowDown.addEventListener('click', (event) => {
    arrowLeft.hidden = false;
    arrowDown.hidden = true;
    ulElem.item(0).hidden = true;
  });
}

sweetDropDown();

function removePane() {
  const container = document.getElementById('container');
  container.addEventListener('click', event => {
    if (event.target.className !== 'remove-button') {
      return;
    }
    const title = event.target.closest('.title');
    if (!title) {
      return;
    }
    const pane = title.closest('.pane');
    if (pane) {
      pane.remove();
    }
  });
}

removePane();

function carouselEmoji() {
  const emojis = document.getElementsByClassName('emoji');
  const listEmoji = Array.from(emojis);
  listEmoji.forEach((emoji, index) => {
    if (index > 2) {
      emoji.hidden = true;
    }
  });

  const arrowBack = document.getElementsByClassName('arrow-back').item(0);
  const arrowForward = document.getElementsByClassName('arrow-forward').item(0);

  arrowForward.addEventListener('click', event => {
    let activeItems = [];
    listEmoji.forEach((item, index) => {
      if (!item.hidden) {
        activeItems.push(index);
      }
    });

    let nextActiveItems = [];
    activeItems.forEach((value, index) => {
      if (value + 3 < listEmoji.length - 1) {
        nextActiveItems.push(value + 3);
        activeItems = activeItems.slice(index, 1);
      }
    });

    listEmoji.forEach((item, index) => {
      item.hidden = true;
      nextActiveItems.forEach(elem => {
        if (elem === index) {
          item.hidden = false;
        }
      });
      activeItems.forEach(elem => {
        if (elem === index) {
          item.hidden = false;
        }
      });
    });
  });

  arrowBack.addEventListener('click', event => {
    let activeItems = [];
    listEmoji.forEach((item, index) => {
      if (!item.hidden) {
        activeItems.push(index);
      }
    });

    let nextActiveItems = [];
    activeItems.forEach((value, index) => {
      if (value - 3 > 0) {
        nextActiveItems.push(value - 3);
        activeItems = activeItems.slice(index, 1);
      }
    });

    listEmoji.forEach((item, index) => {
      item.hidden = true;
      nextActiveItems.forEach(elem => {
        if (elem === index) {
          item.hidden = false;
        }
      });
      activeItems.forEach(elem => {
        if (elem === index) {
          item.hidden = false;
        }
      });
    });
  });
}

carouselEmoji();

function treeMenu() {
  const tree = document.getElementById('tree');

  tree.addEventListener('click', event => {
    if (event.target.tagName !== 'li'.toLocaleUpperCase()) {
      return;
    }
    const li = event.target;
    if ([...li.children].length > 0) {
      [...li.children].forEach(item => item.hidden = !item.hidden);
    }
  });
}

treeMenu();

function testStopPropagation() {
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  const third = document.getElementById('third');

  const presentNodeInfo = (event) => {
    event.stopPropagation();
    alert(`Stop in this layer: ${event.currentTarget.tagName}, content: ${event.currentTarget.id}`);
  }

  const presentNodeInfoBubbling = (event) => {
    alert(`Stop in this layer: ${event.currentTarget.tagName}, content: ${event.currentTarget.id}`);
  }

  first.addEventListener('click', presentNodeInfo);
  second.addEventListener('click', presentNodeInfo);
  third.addEventListener('click', presentNodeInfo);

  first.addEventListener('contextmenu', presentNodeInfoBubbling);
  second.addEventListener('contextmenu', presentNodeInfoBubbling);
  third.addEventListener('contextmenu', presentNodeInfoBubbling);
}

testStopPropagation();

function stopBrowserEvent() {
  const nowhere = document.getElementById('nowhere');
  nowhere.addEventListener('click', event => {
    event.preventDefault();
    alert(`Nowhere doesn't exists, you can't go there! Stay here!`);
  });
  nowhere.addEventListener('mousedown', event => {
    event.preventDefault();
    event.target.style.color = 'transparent';
  });
  nowhere.addEventListener('mouseup', event => {
    event.preventDefault();
    event.target.style.color = 'green';
  });
}

stopBrowserEvent();

function onwEventTry() {
  const ownEvent = document.getElementById('ownevent');

  const chupakabra = new Event('chupakabra', {
    bubbles: false,
    cancelable: false,
  });

  const getRandomColor = () => {
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
  }

  ownEvent.addEventListener('chupakabra', event => {
    event.target.style.color = getRandomColor();
  });

  ownEvent.addEventListener('click', event => {
    event.target.style.color = getRandomColor();
    event.target.style.fontWeight = event.target.style.fontWeight === 'bold' ? 'normal': 'bold';
  });

  ownEvent.dispatchEvent(chupakabra);
}

onwEventTry();