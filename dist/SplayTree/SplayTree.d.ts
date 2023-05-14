import SplayTree, { Node } from "./types";
export default class SplayTreeImpl<T> implements SplayTree<T> {
    private root;
    constructor();
    /**
     * Delete a node from the tree
     * @param data: T
     * @description Given a data value, we first search for the node and then
     *           splay it to the root. If the node is not found, we simply
     *           return.
     *           Otherwise, we delete the node and set the new root to be the
     *           maximum node in the left subtree of the node.
     *           Then we set the right child of the new root to be the right
     *           child of the old root.
     *           If there is no left subtree, we set the new root to be the
     *           right child of the old root.
     *           If there is no right child, we set the new root to be the left
     *           child of the old root.
     *           The time complexity is O(log n) for the splay operation.
     *           The space complexity is O(1).
     */
    delete(data: T): void;
    /**
     * Traverse the tree in inorder
     * @description We traverse the tree in inorder and return the array of nodes.
     *             The time complexity is O(n).
     *             The space complexity is O(n).
     *             Note that this is not part of the splay tree operations.
     *             It is only used for testing purposes.
     */
    inorder(): T[];
    /**
     * Insert a node into the tree
     * @param data: T
     * @description Given a data value, we first search for the node and then
     *            splay it to the root. If the node is found, we simply return.
     *            Otherwise, we create a new node and insert it as the root.
     *            The time complexity is O(log n) for the splay operation.
     *            The space complexity is O(1).
     */
    insert(data: T): void;
    /**
     * Left rotate a node
     * @param node: Node<T>
     * @description Given a node, we first check if the right child of the node
     *             is null. If so, we simply return.
     *             Otherwise, we set the new parent of the node to be the left
     *             child of the right child of the node.
     *             Then, we set the right child of the node to be the left child
     *             of the new parent.
     *             Then, we set the parent of the left child of the new parent
     *             to be the node.
     *             Then, we set the left child of the new parent to be the node.
     *             Then, we set the parent of the node to be the new parent.
     *             The time complexity is O(1).
     *             The space complexity is O(1).
     */
    leftRotate(node: Node<T>): void;
    /**
     * Right rotate a node
     * @param node: Node<T>
     * @description Given a node, we first check if the left child of the node
     *            is null. If so, we simply return.
     *            Otherwise, we set the new parent of the node to be the right
     *            child of the left child of the node.
     *            Then, we set the left child of the node to be the right child
     *            of the new parent.
     *            Then, we set the parent of the right child of the new parent
     *            to be the node.
     *            Then, we set the right child of the new parent to be the node.
     *            Then, we set the parent of the node to be the new parent.
     *            The time complexity is O(1).
     *            The space complexity is O(1).
     */
    rightRotate(node: Node<T>): void;
    /**
     * Search for a node in the tree
     * @param data: T
     * @description Given the data value, we first check if the root is null.
     *              If so, we simply return null.
     *              Otherwise, we start from the root and perform a basic binary
     *              search. If the node is found, we splay it to the root and
     *              return the node. Otherwise, we return null.
     */
    search(data: T): Node<T> | null;
    /**
     * Splay a node to the root
     * @param node: Node<T>
     * @description The splay operation is a bottom-up operation that moves
     *              the node closer to the root. The splay operation is
     *              performed after a search, insert, or delete operation.
     *              The splay operation consists of a series of rotations.
     *              There are three cases for the splay operation:
     *              1. The node is the root.
     *              2. The node is the child of the root.
     *              3. The node is the grandchild of the root.
     *              The splay operation is performed until the node is the root.
     *
     *              There are three types of splay operations:
     *              1. Zig-zig: The node and its parent are both left children
     *              or both right children.
     *              2. Zig-zag: The node and its parent are different types of
     *              children.
     *              3. Zig/Zag: The node is the child of the root.
     */
    splay(node: Node<T>): void;
    /**
     * Find the maximum node in the tree or subtree
     * @param node: Node<T>
     * @description Given a node, we first check if the right child of the node
     *             is null. If so, we simply return the node.
     *             Otherwise, we recursively call the findMax function on the
     *             right child of the node.
     *             The time complexity is O(log(n)).
     *             The space complexity is O(log(n)).
     */
    findMax(node: Node<T>): Node<T>;
    /**
     * Find the minimum node in the tree or subtree
     * @param node: Node<T>
     * @description Given a node, we first check if the left child of the node
     *            is null. If so, we simply return the node.
     *            Otherwise, we recursively call the findMin function on the
     *            left child of the node.
     *            The time complexity is O(log(n)).
     *            The space complexity is O(log(n)).
     */
    findMin(node: Node<T>): Node<T>;
    /**
     * Get the root of the tree
     * @description We simply return the root of the tree.
     */
    getRoot(): Node<T> | null;
}
