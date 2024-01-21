<template>
  <div id="tree"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as d3 from "d3";
import { Tree as TreeData } from "@/types/Tree";

const $emit = defineEmits(["select"]);

const { data } = defineProps<{
  data: TreeData;
}>();

function constructTree(data: TreeData) {
  const width = 928;
  const root = d3.hierarchy(data);
  const dx = 75;
  const dy = width / (root.height + 1);
  const tree = d3.tree().nodeSize([dx, dy]);

  root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
  tree(root);

  let x0 = Infinity;
  let x1 = -x0;

  root.each((d) => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  const height = x1 - x0 + dx * 2;

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-dy / 3, x0 - dx, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

  svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
    .selectAll()
    .data(root.links())
    .join("path")
    .attr(
      "d",
      d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x)
    );

  const node = svg
    .append("g")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
    .selectAll()
    .data(root.descendants())
    .join("g")
    .attr("transform", (d) => `translate(${d.y},${d.x})`)
    .on("click", (e: PointerEvent, d) => $emit("select", d.data))
    .on("mouseover", function () {
      d3.select(this).select("rect").attr("fill", "#999");
    })
    .on("mouseleave", function () {
      d3.select(this).select("rect").attr("fill", "#fff");
    });

  node
    .append("rect")
    .attr("stroke", "#999")
    .attr("fill", "#fff")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", -25)
    .attr("y", -25);

  node
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .text((d) => d.data.name)
    .clone(true)
    .lower()
    .attr("stroke", "white");

  return svg.node();
}

const renderTree = (tree: SVGSVGElement | null) => {
  if (!tree) return;
  document.getElementById("tree")?.appendChild(tree);
};

onMounted(() => {
  const tree = constructTree(data);
  renderTree(tree);
});
</script>

<style lang="scss">
rect {
  cursor: pointer;
}

text {
  font-size: 1.25rem;
  user-select: none;
  cursor: pointer;
}
</style>
