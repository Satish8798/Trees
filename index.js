//binary search tree

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    //Code here
    const newNode = new Node(value);
     if(!this.root){
       this.root=newNode;
     }else{
       let holdingParent = this.root
       while(1){
          if(newNode.value===holdingParent.value){
            return this;
          } else if(newNode.value<holdingParent.value){
           if(holdingParent.left === null){
             holdingParent.left = newNode;
             break;
           }else{
             holdingParent = holdingParent.left;
             continue;
           }
         }else{
           if(holdingParent.right === null){
             holdingParent.right = newNode;
             break;
           }else{
             holdingParent = holdingParent.right;
             continue;
           }
         }
       }
       return this;
     }
     
    
    
  }
  lookup(value){
    //Code here
    if(!this.root){
      return this;
    }else{
      let holdingParent = this.root;
      while(1){
        if(value!== holdingParent.value && holdingParent.left===null && holdingParent.right===null){
          return false;
        }
        if(value===holdingParent.value){
          return holdingParent;
        }else if(value<holdingParent.value){
          holdingParent=holdingParent.left;
        }else{
          holdingParent=holdingParent.right;
        }
      }
    }
    
    
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(190))
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
