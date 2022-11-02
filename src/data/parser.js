import { trimAll } from "../utils/trimAll";

export const parser = (target) => {
  target = trimAll(target);
  const result = {
    name: "ROOT",
    type: "node",
    attribute: [],
    children: [],
  };
  const stack = [{ tag: result }];

  let current;
  let i = 0;
  const j = target.length;
  while ((current = stack.pop())) {
    while (i < j) {
      const ptr = i;
      if (target[ptr] === "<") {
        const idx = target.indexOf(">", ptr);
        i = idx + 1;
        if (target[ptr + 1] === "/") {
          current = current.back;
        } else {
          if (elementNode(target, ptr, idx, current, stack)) break;
        }
      } else {
        i = textNode(target, ptr, current);
      }
    }
  }
  return result;
};

const textNode = (target, ptr, current) => {
  const idx = target.indexOf("<", ptr);
  current.tag.children.push({
    type: "text",
    text: trimAll(target.substring(ptr, idx)),
  });
  return idx;
};

const elementNode = (target, ptr, idx, current, stack) => {
  const isClose = target[idx - 1] === "/";
  const [name, ...attrs] = target.substring(ptr + 1, idx - Number(isClose)).split(" ");
  let attributeArray = [];

  if (attrs) {
    for (let attr of attrs) {
      const [attrName, property] = attr.split("=");
      attributeArray.push({
        attrName: attrName,
        property: property.replace(/(^"|"$)/g, ""),
      });
    }
  }

  const tag = {
    name: name,
    type: "node",
    attribute: attributeArray,
    children: [],
  };

  current.tag.children.push(tag);
  if (!isClose) {
    stack.push({ tag, back: current });
  }

  return !isClose;
};
