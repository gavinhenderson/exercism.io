const Node = function ( initData ) {
  this.data = initData;
  this.left = null;
  this.right = null;
}

Node.prototype.insert = function( newData ) {
  let newNode = new Node( newData );

  let inserting = true;
  let current = this;
  let previous = null;
  while(inserting) {
    if( current == null ){
      if( newNode.data <= previous.data ){
        previous.left = newNode
        inserting = false;
      } else if( newNode.data > previous.data ){
        previous.right = newNode
        inserting = false;
      }
    } else if(newNode.data <= current.data){
      previous = current;
      current = current.left;
    } else if(newNode.data > current.data) {
      previous = current;
      current = current.right;
    }
  }
}

Node.prototype.each = function( func ){
  if(this.left != null){
    this.left.each( func );
  }
  func(this.data);
  if(this.right != null){
    this.right.each( func );
  }
}

module.exports = Node;
