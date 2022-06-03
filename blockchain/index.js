const { Block } = require('./block');
const { Blockchain } = require('./blockchain');

const testBlockChain = new Blockchain();
console.log(testBlockChain.chain);
testBlockChain.addBlock(new Block({ from: 'Petr', to: 'Vadik', amount: '100 eth' }));
testBlockChain.addBlock(new Block({ from: 'Vadik', to: 'Maksim', amount: '0.1 eth' }));
testBlockChain.addBlock(new Block({ from: 'Maksim', to: 'Dasha', amount: '10000 eth' }));
console.log(testBlockChain.chain);
