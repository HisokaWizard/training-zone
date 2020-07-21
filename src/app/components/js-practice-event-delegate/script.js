function sortTableColumns() {
  const tableItem = document.getElementById('grid');
  const body = tableItem.querySelector('tbody');
  const rows = Array.from(body.rows);
  const titles = Array.from(tableItem.querySelectorAll('th'));

  titles.forEach(title => {
    title.addEventListener('click', event => {
      const th = event.target;
      const type = th.dataset.type;
      const colNum = th.cellIndex;
      let compare;
      switch(type) {
        case 'number': 
          compare = (rowA, rowB) => {
            return rowA.cells[colNum].innerText - rowB.cells[colNum].innerText;
          }
          break;
        case 'string':
          compare = (rowA, rowB) => {
            return rowA.cells[colNum].innerText > rowB.cells[colNum].innerText ? 1 : -1;
          }
          break;
      }
      rows.sort(compare);

      body.append(...rows);
    });
  });
}

sortTableColumns();

function getUniqueSymbols(str) {
  let uniqueSymbols = [];
  str.split('').forEach(symbol => {
    if(!uniqueSymbols.find(item => {
      if(symbol === item.symbol) {
        item.count++;
        return item;
      }
    })) {
      uniqueSymbols.push({symbol: symbol, count: 1});
    }
  });
  let strResult = '';
  uniqueSymbols.forEach(item => {
    strResult += `${item.symbol}${item.count}`;
  })
  return strResult;
}


console.log(getUniqueSymbols('wwwwaawadexxxwxxxw'))