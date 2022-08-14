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
    display(){
        var listStr = "";
        if (this.head == null){
            return "Empty list";
        }
        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null){
            listStr += ", " + runner.value;
            runner = runner.next;
        }
        return listStr;
    }


}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(7);
console.log(mySLL.display());
// mySLL.addFront(12);

// console.log(mySLL);
// mySLL.removeFront();

console.log(mySLL);