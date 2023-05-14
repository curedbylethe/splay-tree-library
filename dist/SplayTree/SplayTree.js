"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SplayTreeImpl = /** @class */ (function () {
    function SplayTreeImpl() {
        this.root = null;
    }
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
    SplayTreeImpl.prototype.delete = function (data) {
        var node = this.search(data);
        if (node) {
            this.splay(node);
            if (node.left) {
                var max = this.findMax(node.left);
                this.splay(max);
                max.right = node.right;
                this.root = max;
            }
            else {
                this.root = node.right;
            }
        }
        return;
    };
    /**
     * Traverse the tree in inorder
     * @description We traverse the tree in inorder and return the array of nodes.
     *             The time complexity is O(n).
     *             The space complexity is O(n).
     *             Note that this is not part of the splay tree operations.
     *             It is only used for testing purposes.
     */
    SplayTreeImpl.prototype.inorder = function () {
        var result = [];
        var inorderHelper = function (node) {
            if (node) {
                inorderHelper(node.left);
                result.push(node.data);
                inorderHelper(node.right);
            }
        };
        inorderHelper(this.root);
        return result;
    };
    /**
     * Insert a node into the tree
     * @param data: T
     * @description Given a data value, we first search for the node and then
     *            splay it to the root. If the node is found, we simply return.
     *            Otherwise, we create a new node and insert it as the root.
     *            The time complexity is O(log n) for the splay operation.
     *            The space complexity is O(1).
     */
    SplayTreeImpl.prototype.insert = function (data) {
        var node = this.search(data);
        if (node) {
            this.splay(node);
            return;
        }
        var newNode = {
            data: data,
            left: null,
            right: null,
            parent: null
        };
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        else {
            var current = this.root;
            var parent_1 = null;
            while (current) {
                parent_1 = current;
                if (data < current.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            if (parent_1) {
                if (data < parent_1.data) {
                    parent_1.left = newNode;
                }
                else {
                    parent_1.right = newNode;
                }
                newNode.parent = parent_1;
            }
        }
        this.splay(newNode);
    };
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
    SplayTreeImpl.prototype.leftRotate = function (node) {
        var newParent = node.right;
        if (newParent) {
            node.right = newParent.left;
            if (newParent.left) {
                newParent.left.parent = node;
            }
            newParent.parent = node.parent;
        }
        if (node.parent === null) {
            this.root = newParent;
        }
        else if (node === node.parent.left) {
            node.parent.left = newParent;
        }
        else {
            node.parent.right = newParent;
        }
        if (newParent) {
            newParent.left = node;
            node.parent = newParent;
        }
    };
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
    SplayTreeImpl.prototype.rightRotate = function (node) {
        var newParent = node.left;
        if (newParent) {
            node.left = newParent.right;
            if (newParent.right) {
                newParent.right.parent = node;
            }
            newParent.parent = node.parent;
        }
        if (node.parent === null) {
            this.root = newParent;
        }
        else if (node === node.parent.right) {
            node.parent.right = newParent;
        }
        else {
            node.parent.left = newParent;
        }
        if (newParent) {
            newParent.right = node;
            node.parent = newParent;
        }
    };
    /**
     * Search for a node in the tree
     * @param data: T
     * @description Given the data value, we first check if the root is null.
     *              If so, we simply return null.
     *              Otherwise, we start from the root and perform a basic binary
     *              search. If the node is found, we splay it to the root and
     *              return the node. Otherwise, we return null.
     */
    SplayTreeImpl.prototype.search = function (data) {
        var root = this.root;
        if (root === null) {
            return null;
        }
        var node = root;
        while (node) {
            if (node.data === data) {
                this.splay(node);
                return node;
            }
            else if (node.data > data) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }
        return null;
    };
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
    SplayTreeImpl.prototype.splay = function (node) {
        var root = this.root;
        if (root === null) {
            return;
        }
        while (this.root !== node) {
            if (node.parent === root) {
                if (node === root.left) {
                    this.rightRotate(root);
                }
                else {
                    this.leftRotate(root);
                }
            }
            else {
                var parent_2 = node.parent;
                var grandParent = parent_2 ? parent_2.parent : null;
                if (parent_2 && grandParent && parent_2 === grandParent.left) {
                    if (node === parent_2.left) {
                        this.rightRotate(grandParent);
                        this.rightRotate(parent_2);
                    }
                    else {
                        this.leftRotate(parent_2);
                        this.rightRotate(grandParent);
                    }
                }
                else if (parent_2 && grandParent && parent_2 === grandParent.right) {
                    if (node === parent_2.right) {
                        this.leftRotate(grandParent);
                        this.leftRotate(parent_2);
                    }
                    else {
                        this.rightRotate(parent_2);
                        this.leftRotate(grandParent);
                    }
                }
            }
        }
    };
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
    SplayTreeImpl.prototype.findMax = function (node) {
        if (node.right === null) {
            return node;
        }
        return this.findMax(node.right);
    };
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
    SplayTreeImpl.prototype.findMin = function (node) {
        if (node.left === null) {
            return node;
        }
        return this.findMin(node.left);
    };
    /**
     * Get the root of the tree
     * @description We simply return the root of the tree.
     */
    SplayTreeImpl.prototype.getRoot = function () {
        return this.root;
    };
    return SplayTreeImpl;
}());
exports.default = SplayTreeImpl;
