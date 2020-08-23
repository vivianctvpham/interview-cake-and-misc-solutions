/* Given preorder and inorder traversal of a tree, construct the binary tree. 

Input: 2 arrays (1 preorder, 1 inorder)

  Rebuild the tree based on the two arrays
    - Find the root node from preorder (first node since its preorder)
    - Use that root node to find the index of it in the inorder array and figure out what falls into place after (recursively)

Output: Rebuilt tree
*/

const buildTree = (preorder, inorder) => {

if (!preorder.length || !inorder.length) return null; 

let root = preorder[0];
let index = inorder.indexOf(root)

let newTree = new TreeNode(root)
newTree.left = buildTree(preorder.slice(1, 1 + index), inorder.slice(0, index));

newTree.right = buildTree(preorder.slice(1 + index), inorder.slice(1 + index))

return newTree;

}

