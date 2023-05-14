export interface Node<T> {
    data: T;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;
}
declare class SplayTree<T> {
    constructor();
    splay(node: Node<T>): void;
    leftRotate(node: Node<T>): void;
    rightRotate(node: Node<T>): void;
    insert(data: T): void;
    delete(data: T): void;
    search(data: T): Node<T> | null;
    inorder(): T[];
    findMax(node: Node<T>): Node<T>;
    findMin(node: Node<T>): Node<T>;
    getRoot(): Node<T> | null;
}
export default SplayTree;
