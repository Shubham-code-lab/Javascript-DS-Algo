class Node {
    constructor(data = 0,next = null){
        this.data = data;
        this.next = next; 
    }
}       

class LinkedList {
    constructor(){
        this.head = null;
        this._size = 0;
    }
    addStart(data){
        let node = new Node(data, this.head);
        this.head = node;
        this._size++;
    }
    addEnd(data){
        let node = new Node(data);
        let current = this.head;
        while(current && current.next)current = current.next;
        if(!current)this.head = node;
        else current.next = node;
        this._size++;
    }
    addAtIndex(data, index){
        let node = new Node(data);
        if(index === 0){
            node.next = this.head;
            this.head = node;
            return;
        }
        let current = this.head;
        for(let i = 0; i<index-1; i++){
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    }
    deleteStart(){
        if(!this.head) return;
        this.head = this.head.next;
    }
    deleteEnd(){
        if(!this.head) return;
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next)current = current.next;
        current.next =null;
    }
    deleteAtIndex(index){
        if(!this.head) return;
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for(let i = 0 ;i<index-1;i++)
            current = current.next;
        current.next = current.next.next;
    }
    reverseList(){
        if(!this.head)return;
        let reverse = (current)=>{
            if(!current.next){
                this.head = current;
                return;
            }
            reverse(current.next);
            current.next.next =current;
            current.next = null;
        }
        reverse(this.head);
    }
    printList(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    printReverse(){
        let print = (current)=>{
            if(!current)return null;
            current.next = print(current.next);
            console.log(current.data);
            return current;
        }
        this.head = print(this.head);
    }
    get size(){
        return this._size;
    }
}

let list = new LinkedList();
list.addStart(34);
list.addStart(31);
list.addEnd(37);
list.addEnd(39);
// list.deleteStart();
// list.deleteEnd();
// list.addAtIndex(44,3);
// list.deleteAtIndex(3);

console.log(list.size);
// list.printList();
// list.reverseList();
list.printList();
list.printReverse();