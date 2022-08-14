class SLLNode{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront(){
        if(this.head == null){
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }
    front(){
        return this.head ? this.head.value : null;
    }

}

var mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(10);
console.log(mySLL.front());
mySLL.addFront(7);
mySLL.addFront(12);

// console.log(mySLL);
// mySLL.removeFront();

console.log(mySLL);

