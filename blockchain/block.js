const crypto = require('crypto');

const getSHA256Hash = (data) => {
  if (typeof data === 'function') {
    console.log('Data type is function - it is not correct');
  }
  let dataToHash;
  if (typeof data === 'object') {
    dataToHash = JSON.stringify(data);
  } else {
    dataToHash = data?.toString();
  }
  return crypto.createHash('sha256').update(dataToHash).digest('hex');
};

class Block {
  data;
  timestamp;
  previousBlockHash;
  hash;

  constructor(_data) {
    this.data = _data;
    this.timestamp = Date.now();
    this.previousBlockHash = '';
    this.hash = getSHA256Hash({
      data: this.data,
      timestamp: this.timestamp,
      previousBlockHash: this.previousBlockHash,
    });
  }
}

module.exports = { Block };
