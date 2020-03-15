# Graphs

## What is a Graph

A graph data structure consist of a finite(and possible mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
WHAT?!?!
A graph is a collection of nodes and collection of connections between those nodes

No starting point in a graph. They are all treated equally

## Uses for Graphs

- Social Networking
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendation Engines - Netflix, Facebook, Amazon, ETC.
- EVERYWHERE!

## **Types of Graphs**

## Essential Graph Terms

- Vertex: A node
- Edge: connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected: directions assigned to distances between vertices

## Adjacency Matrix

- Takes up more space(in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

## Adjacency List

- Can take up less space(in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

## Matrix vs List Big O

|V| - number of vertices(nodes)
|E| - number of edges

| Operation     | Adjacency List | Adjacency Matrix |
|---------------|----------------|------------------|
| Add Vertex    | O(1)           | O(|V^2|)         |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(|V|+|E|)     | O(|V^2|)         |
| Remove Edge   | O(|E|)         | O(1)             |
| Query         | O(|V|+|E|)     | O(1)             |
| Storage       | O(|V|+|E|)     | O(|V^2|)         |

## Why use an adjacency list

Most data in the real-world tend to lend itself to sparser and/or larger graphs