class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    if(!this.root) return null;
        if (data === this.root.data) return this.root;
        
        let currentNode = this.root;
        let queue = [ currentNode ];

        while ( queue.length > 0) {
          // console.log(queue)
            currentNode = queue.shift();
           
  
            if (currentNode.data === data) {
              return currentNode 
            } 
             if(currentNode.children.length > 0) {
               for (let i = 0; i < currentNode.children.length; i++) {
                queue.push(currentNode.children[i])
               }
             }
            
         
        }
        return null
    }

}

module.exports = { TreeNode, Tree };
