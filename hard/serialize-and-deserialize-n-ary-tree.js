/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    
    constructor() {
      this.str = '';
  }
  
  /** 
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function(root) {
      let retVal = '';
      if (!root) {
          return retVal;
      }
      
      const stack = [{node: root, lvl: 0}];
      let currLvl = 0;
      
      while (stack.length > 0) {
          const {node: {val, children}, lvl} = stack.pop();
          while (lvl > currLvl) {
              retVal += '[';
              ++currLvl;
          }
          while (lvl < currLvl) {
              retVal += ']';
              --currLvl;
          }
          retVal += val + '*';

          
          for (let i = children.length -1; i >= 0; i--) {
              stack.push({node: children[i], lvl: lvl + 1});
          }
      }
      while (currLvl > 0) {
          retVal += ']';
          --currLvl;
      }
      
      return retVal;       
  };
  
  /** 
   * @param {string} data 
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function(data) {
      if (data === '') {
          return null;
      }
      let head = new Node(-1);
      head.children = [];
      const stack = [{val: head, lvl: 0}];
      let num = '';
      let prev = head;
      for (const k of data) {
          const {val, lvl} = stack[stack.length - 1];
          if (k === '*') {
              const node = new Node(parseInt(num));
              prev = node;
              node.children = [];
              val.children.push(node);
              num = '';
          } else if (k === '[') {
             stack.push({val: prev, lvl: lvl + 1}); 
          } else if (k === ']') {
              while (stack[stack.length - 1].lvl === lvl) {
                  stack.pop();   
              }
          } else {
              num += k;
          }
      }
      return head.children[0];
      
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));