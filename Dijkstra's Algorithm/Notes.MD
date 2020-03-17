# Dijkstra's Algorithm

**Pre-Req:** Graphs and Binary Heaps(Priority Queues)

## What Is Dijkstra's Algorithm

One of the most famous and widely used algorithms around
Finds the shortest path between two vertices on a graph
'What is the fastest way to get from point A to point B?'

## Who Was Edsger Dijkstra

*Edsger Dijkstra* was a Dutch programmer, physicist, essayist, and all around smarty pants

He helped advance computer science from an 'art' to an academic discipline
Many of his discoveries and algorithms are still commonly used to this day

## Why is the Dijkstra Algorithm useful

- *GPS* Finding the fastest route
- *Network Routing* Find open shortest path for data
- *Biology* Used to model the spread of viruses among humans
- *Airline Tickets* Find cheapest route to your destination
- Many other uses!

## The Approach

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking ***from the starting node***
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node
