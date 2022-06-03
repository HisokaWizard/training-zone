const { Block } = require('./block');

class Blockchain {
  chain = [];

  constructor() {
    this.chain.push(new Block({ text: 'First block - genesis' }));
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    if (!(block instanceof Block)) {
      console.log('It not a block');
      return;
    }
    block.previousBlockHash = this.getLastBlock().hash;

    this.chain.push(block);
  }
}

module.exports = { Blockchain };
