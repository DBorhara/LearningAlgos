// Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /*
  Adding a Vertex PseudoCode
  1. Write a method called addVertex, which accepts the name of a vertex
  2. It should add a key to the adjacency list with the name of the vertex and sets it value to be an empty array
  */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /*
  Adding an Edge PseudoCode
  1. This function will accept two vertices , we can call them vertex1 and vertex2
  2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  4. Don't worry about handling errors/invalid vertices
  */
  addEdge(vertex1, vertex2) {
    this.adjacencyList(vertex1).push(vertex2);
    this.adjacencyList(vertex2).push(vertex1);
  }

  /*
 Remove an Edge PseudoCode
 1. This function will accept two vertices, we can call them vertex1 and vertex2
 2. The function should reassign they key of vertex1 to be an array that does not include vertex2
 3. The function should reassign they key of vertex2 to be an array that does not include vertex1
 4. Don't worry about handling errors/invalid vertices
 */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
  }
  /*
  Remove a Vertex PseudoCode
  1. The function should accept a vertex to remove
  2. The function should loop as long as there are any other vertices in teh adjacency list for that vertex
  3. Inside the loop, call our removeEdge function with the vertex we are removing, and any values in the adjacency list for that vertex
  4. Delete the key in the adjacency list for that vertex
  */

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  /*DFS Recursive PseudoCode
DFSRecursive(vertex){
  if vertex is empty
    return(this is base case)
  add vertex as visited
  mark vertex as visited
  for each neighbor in vertex's neighbors:
    if neighbor is not visited:
    recursively call DFSRecursive on neighbor
}
  1. The function should accept a starting node
  2. Create a list to store the end result, to be returned at the very end
  3. Create an object to store the visited vertices
  4. Create a helper function which accepts a vertex
    1. The helper function should return early if the vertex is empty
    2. The helper function should place the vertex it accepts into the visited object and push that vertex into the results array
    3. Loop over all the values in the adjacencyList for that vertex
    4. If any of those values have not been visited, recursively invoke the helper function with that vertex

  */

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  /* DFS Iterative PseudoCode
 DFS-iterative(start){
  let S be a stack
  S.push(start)
  while(S is not Empty){
    vertex= S.pop();
    if(vertex is not labeled as discovered){
      visit vertex(add to results list)
      label vertex as discovered
      for each of vertex's neighbors, N do
      S.push(N)
    }
  }
 }

 1. The function should accept a starting node
 2. Create a stack to help use to keep track of vertices(list/array)
 3. Create a list to store the end result, to be returned at the very end
 4. Create an object to store visited vertices
 5. Add the starting vertex to stack, and mark it visited
 6. While the stack has something in it
  1. Pop the next vertex from the stack
  2. If the vertex has not been visited yet
    1. Mark it as visited
    2. Add it to the result list
    3. Push all of its neighbors into the stack

 */

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  /* BFS PseudoCode
 1. The function should accept a starting vertex
 2. Create the queue(you can use an array) and place the starting vertex in it
 3. Create an array to store the nodes visited
 4. Create an object to store the nodes visited
 5. Mark the starting vertex as visited
 6. Loop as long as there is anything in the queue
 7. Remove the first vertex from the queue and push it into the array that stores nodes visited
 8. Loop over each vertex in the adjacency list for the vertex you are visiting
 9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue the vertex
 10. Once you have finished looping, return the array of visited nodes
 */

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList.forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
