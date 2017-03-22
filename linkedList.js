/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  function node(value) {
    var next = null;
    return {
      value,
      next
    };
  }

  var head = null;
  var tail = null;


  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    if (head === null){
      tail = node(value);
      head = tail;
    }

    else {
      tail.next = node(value);
      tail = tail.next;
    }

    return tail;
  }

  function get(number){

  var current = 0;
  var currentNode = head;

    if (head === null){
      return false;
    }

    while (current !== number){

      if(currentNode.next === null){
        return false;
      }
      else{
        currentNode = currentNode.next;
      }

    current ++;
    }

  return currentNode;

  }

  function remove(number){

  var currentNode = get(number);
  var previousNode = get(number - 1);

  if (currentNode === false) {
    return false;
  }

  if (number === 0) {
    head = currentNode.next;
  }

  if (currentNode.next === null) {
    tail = previousNode;
    previousNode.next = null;
  }

  else {
  previousNode.next = currentNode.next;
  }

  }

  function insert(value, number){

    newNode = node(value);

    if (number === 0) {
      newNode.next = head;
      head = newNode;
    }

    var currentNode = get(number-1);
    var nextNode = get(number);

    if (currentNode === false) {
      return false;
    }

    else {
      currentNode.next = newNode;
      newNode.next = nextNode;
    }

  }

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };

}






