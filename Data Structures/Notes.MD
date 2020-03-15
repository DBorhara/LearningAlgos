# Data Structures

## What Data Structure is Best?

What do they do?
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

Why so many?
Different data structures excel at different things. Some are highly specialized, while others(like arrays) are more generally used

Why care?
The more time you spend as a developer, the more likely you'll need to use on of these data structures.
You've already worked with many of them unknowingly e.g the DOM Tree
and of course... INTERVIEWS

THERE IS NO "BEST" ON STRUCTURE

They all excel in different situations, Otherwise why bother learning them all?

Working with map/location data?
Use a graph!

Need an ordered list with fast inserts/removals at the beginning and end?
Use a linked list!

Web scarping nested HTML?
Use a tree!

Need to write a scheduler?
Use a binary heap!

### ES2015 Class Syntax Overview

What is a class?
A blueprint for creating objects with pre-defined properties and methods
Why do we need to learn this?
We are going to implement data structures as classes

How we will be using classes

<script>
class DataStructure(){
  constructor(){
    //What default properties should it have?
  }
  someInstanceMethod(){
    //What should each object created from this class be able to do?
  }
}
</script>

We will be using the constructor and instance methods quite a bit.
We will almost never be using the static(class) methods

'this' note
Inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class(also known as an instance)

### ES2015 Recap

- Classes are blueprints that when created make objects known as instances
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is being instantiated
- Instance methods can be added to classes similar to methods in objects
