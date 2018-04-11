function CircularBuffer(maxSize) {
  let buffer = [];

  function read() {
    if( buffer.length == 0 ){ throw bufferEmptyException(); }
    let oldest = buffer.pop();
    return oldest;
  }

  function write(newElement) {
    if( newElement == null || newElement == undefined ){ return }
    if( buffer.length==maxSize ){ throw bufferFullException(); }
    buffer.unshift(newElement);
  }

  function forceWrite(newElement) {
    if( newElement == null || newElement == undefined ){ return }
    if( buffer.length == maxSize ){
      buffer.pop();
    }
    buffer.unshift(newElement);
  }

  function clear(){
    buffer = []
  }

  return { read, write, forceWrite, clear }
}

const bufferEmptyException = () => new Error("Buffer is empty")
const bufferFullException = () => new Error("Buffer is full")
const circularBuffer = (size) => new CircularBuffer(size);

module.exports = {
  circularBuffer,
  bufferEmptyException,
  bufferFullException
}
