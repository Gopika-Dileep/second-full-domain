class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    prepend(value) {
        const node = new Node(value)  
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

        // ---------insert a value at index 3
    insert(value, index) {
        const node = new Node(value)
        if (index < 0 || index > this.size) {
            console.log("invalid")
            return
        }
        if (!this.head) {
            console.log("empty")
            return
        }

        if (index == 0) {
            this.prepend(value)
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }
           // -------insert a value at target value
    insertv(value, target) {
        if (this.head.value == target) {
            this.prepend(value)
        } else {
            let curr = this.head
            while (curr) {
                if (curr.value == target) {
                    curr.value = value
                }
                curr = curr.next
            }
        }
    }
     // ---------remove value at  specific index
    remove(index) {
        if (index === 0) {
            this.head = this.head.next
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            curr.next = curr.next.next
        }

    }
       // ---------remove a specif value-
    removevalue(value) {
        if (this.head.value == value) {
            this.head = this.head.next
            this.size--
        } else {
            let curr = this.head
            while (curr) {
                if (curr.next.value == value) {
                    curr.next = curr.next.next
                    this.size--
                }
                curr = curr.next
            }
        }
    }
    search(value) {
        if (!this.head) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    deleteMiddle() {
        if (!this.head) {
            return null
        }
        let slow = this.head
        let fast = this.head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }
    array(arr) {
        arr.forEach((val) => this.prepend(val))
    }

    print() {
        if (!this.head) {
            console.log("empty")
        } else {
            let curr = this.head
            let listvalue = ""
            while (curr) {
                listvalue += `${curr.value} `
                curr = curr.next
            }
            console.log(listvalue)
        }
    }
}

let list = new linkedlist()
list.prepend(2)
list.prepend(1)
list.append(3)
// list.insert(4,2)
// list.insertv(4,3)
// list.remove(1)
// list.removevalue(3)
// console.log(list.search(3))
// list.reverse()
// list.deleteMiddle()
// list.array([11,12,13])
list.print()




// -----------------------------------------LL------------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let curr = this.head
//           while(curr.next){
//               curr = curr.next
//           }
//           curr.next = node
//         }
//         this.size++
//     }
//     search(value){
//         if(!this.head){
//             return -1
//         }
//         let i = 0
//         let curr = this.head
//         while(curr){
//             if(curr.value== value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }
//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr= next
//         }
//         this.head = prev
//     }
//     deletemiddle(){
//         let slow = this.head
//         let fast = this.head
//         let prev = null
//         while(fast && fast.next){
//             prev = slow
//             slow = slow.next
//             fast= fast.next.next
//         }
//         prev.next = slow.next
//         this.size--
//     }
//     findmiddle(){
//         if(!this.head){
//             return null
//         }
//         let slow = this.head
//         let fast = this.head
//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.value
//     }
//     // Delete the first node (deleteHead)
//     deletehead(){
//         if(!this.head){
//             return null
//         }            
//         this.head = this.head.next
//         this.size--
        
//     }
//     // Delete the last node (deleteTail)
//     delettail(){
//         if(!this.head){
//             return null
//         }
//         if(!this.head.next){
//             this.head = null
//             this.size--
//             return
//         }
//         let curr = this.head
//         let prev = null
//         while(curr.next){
//             prev = curr
//             curr= curr.next
//         }
//         prev.next = null
//         this.size--
//     }
//     // Get value at index (getAtIndex)
//     getAtIndex(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let curr = this.head
//         let i = 0
//         while(i<index){
//             curr = curr.next 
//             i++
//         }
//         return curr.value
//     }
//     // Insert at index (insertAtIndex)
//     insertAtIndex(index,value){
//         if(index<0|| index >this.size){
//             return null
//         }
//         const node = new Node(value)
//         if(index ==0){
//             this.prepend(node)
//             return 
//         }
//         let curr = this.head 
//         let i =0
//         while(i<index-1){
//             curr = curr.next
//             i++
//         }
//         node.next = curr.next
//         curr.next = node
//         this.size++
//     }
//     // Convert LinkedList → Array
//     toArray(){
//         let arr =[]
//         let curr = this.head
//         while(curr){
//             arr.push(curr.value)
//             curr = curr.next
//         }
//         return arr
//     }
//     array(arr){
//         arr.forEach((val)=>this.prepend(val))
//     }
//     // 6. Count occurrences of a value
//     countOccurrences(value){
//         let count=0
//         let curr = this.head
//         while(curr){
//             if(curr.value==value){
//                 count++
//             }
//             curr=curr.next
//         }
//         return count
//     }
//     // ⭐ Q3. Remove duplicates (UNSORTED linked list)
//     removeDuplicates(){
//         let curr = this.head
//         let set = new Set()
//         let prev = null
//         while(curr){
//             if(set.has(curr.value)){
//                 prev.next = curr.next
//                 this.size--
//             }else{
//                 set.add(curr.value)
//                 prev = curr
//             }
//             curr =curr.next
//         }
//     }
//     // Find the length of the linked list
//     length(){
//         let curr = this.head
//         let count =0
//         while(curr){
//             count++
//             curr = curr.next
//         }
//         return count
//     }
//     // Check if the linked list is sorted
//     isSorted(){
//         if(!this.head || !this.head.next){
//             return true
//         }
//         let curr = this.head
//         while(curr.next){
//             if(curr.value>curr.next.value){
//                 return false
//             }
//             curr = curr.next
//         }
//         return true
//     }
//     // Delete a node by value
//     deleteByValue(value){
//         if(!this.head){
//             return null
//         }
//         if(this.head.value==value){
//             this.head = this.head.next
//             this.size--
//             return
//         }
        
//         let curr = this.head
//         while(curr.next){
//             if(curr.next.value == value){
//                 curr.next = curr.next.next
//                 this.size--
//                 return 
//             }
//             curr = curr.next
//         }
//     }
//     // Find the Nth node from the END
//     nthFromEnd(n){
//         let slow = this.head
//         let fast = this.head
//         for(let i = 0; i<n;i++){
//             if(!fast){
//                 return
//             }
//             fast = fast.next
//         }
//         while(fast){
//             fast = fast.next
//             slow=slow.next
//         }
//         return slow.value
//     }
//     // Delete Nth Node From End
//     removeNthFromEnd(n){
//         let fast = this.head
//         let slow = this.head
//         for(let i = 0 ;  i < n ; i++){
//             if(!fast){
//                 return 
//             }
//             fast = fast.next
//         }
        
//         if(!fast){
//             this.head = this.head.next
//             this.size--
//             return 
//         }
        
//         while(fast.next){
//             fast = fast.next
//             slow = slow.next
//         }
//         slow.next = slow.next.next
//     }
//      print() {
//         if (!this.head) {
//             console.log("empty")
//         } else {
//             let curr = this.head
//             let listvalue = ""
//             while (curr) {
//                 listvalue += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalue)
//         }
//     }

// }

// const list = new linkedlist()
// list.prepend(15)
// list.prepend(10)
// list.prepend(5)
// list.append(20)
// list.append(25)
// list.print()
// console.log(list.search(10))
// console.log(list.findmiddle())
// list.deletemiddle()
// list.print()

// ----------------------------------
// list.reverse()
// list.print()

// -------------------------------
// list.deletehead()
// list.print()

// ------------------------------
// list.delettail()
// list .print()

// --------------------------------
// console.log(list.getAtIndex(1))
// ----------------------------------
// list.insertAtIndex(2,15)
// list.print()
// -------------------------------------
// console.log(list.toArray())
// ------------------------------
// list.array([3,2,1])
// list.print()
// -------------------------------
// list.append(20)
// list.print()
// console.log(list.countOccurrences(20))
// ------------------------------------

// list.append(20)
// list.append(10)
// list.print()
// list.removeDuplicates()
// list .print()
// ------------------------------
// console.log(list.length())
// ---------------------------------
// list.append(1)
// list.print()
// console.log(list.isSorted())
// -------------------------------------
// list.deleteByValue(25)
// list.print()
// -----------------------------------

// console.log(list.nthFromEnd(2))
// ---------------------------------
// list.removeNthFromEnd(2)
// list.print()



// ----------------delete nth node from end 

// we use dummy that is most common and good method refer 

// deleteNthFromEnd(n) {
//     let dummy = new Node(0);
//     dummy.next = this.head;

//     let slow = dummy;
//     let fast = dummy;

//     // Move fast n+1 steps
//     for (let i = 0; i <= n; i++) {
//         if (!fast) return;
//         fast = fast.next;
//     }

//     // Move both until fast reaches end
//     while (fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     slow.next = slow.next.next;
//     this.head = dummy.next;
//     this.size--;
// }



