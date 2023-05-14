import { SplayTree } from "../src";
function initTree() {
    const tree = new SplayTree<number>();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(8);
    tree.insert(9);
    tree.insert(10);
    return tree;
}

describe("SplayTree", () => {
    it("should be able to insert and find", () => {
        const tree = initTree();
        const node = tree.search(5);
        expect(node).not.toBeNull();
        expect(node!.data).toBe(5);
        const anotherNode = tree.search(11);
        expect(anotherNode).toBeNull();
    });
    it("should be able to delete", () => {
        const tree = initTree();
        tree.delete(5);
        const node = tree.search(5);
        expect(node).toBeNull();
    });
    it("should be able to find max and min", () => {
        const tree = initTree();
        const max = tree.findMax(tree.getRoot()!);
        expect(max.data).toBe(10);
        const min = tree.findMin(tree.getRoot()!);
        expect(min.data).toBe(1);
    });
    it("should be able to get inorder traversal", () => {
        const tree = initTree();
        const inorder = tree.inorder();
        expect(inorder).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.delete(5);
        const newInorder = tree.inorder();
        expect(newInorder).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 10]);
    });
    it("should splay the searched node to root", () => {
        const tree = initTree();
        const node = tree.search(5);
        expect(node!.data).toBe(5);
        const root = tree.getRoot();
        expect(root!.data).toBe(5);
    });
    it("should splay the inserted node to root", () => {
        const tree = initTree();
        tree.insert(11);
        const root = tree.getRoot();
        expect(root!.data).toBe(11);
    });
    it("should splay the deleted node's parent to root", () => {
        const tree = initTree();
        tree.delete(5);
        const root = tree.getRoot();
        expect(root!.data).toBe(6);
    });
});
