import { Item } from "@/types/Data";
import { Tree } from "@/types/Tree";

export const convertToTree = (
  input: Item[],
  parent: string = ""
): Tree[] => {
  const result: Tree[] = [];

  input
    .filter((item) => item.parent === parent)
    .forEach((item) => {
      const children = convertToTree(input, item.name);
      const newItem: Tree = {
        name: item.name,
        value: item.name,
        description: item.description,
      };

      if (children.length) {
        newItem.children = children;
      }

      result.push(newItem);
    });

  return result;
};