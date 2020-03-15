# Hash Tables/Hash Map

## What is a hash table

Hash Tables are used to store key-value pairs
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all of the following operations:
a. Finding values
b. Adding new values
c. Removing values

### Why should I care

Nearly every programming language has some sort of hash table data structure
Because of their speed, hash tables are very commonly used

Javascript has objects and maps\*

### The Hash Part

We will implement our own version of a hash table

In order to look up values by keys, we need a way to convert keys into valid array indices

A function that performs this task is called hashing function

## What makes a good Hash(not a cyrptographically secure one)

1. It needs to be fast(constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic(Same input yields same output)

## What is a hashing algorithm

## What makes a good hashing algorithm

## Understand how collisions occur in a hash table

## Handle Collisions

Even with a large array and a great hash function, collisions are inevitable
There are many strategies for dealing with collisions. Here are two:

### Separate Chaining

With separate chaining, at each index in our array we store values using a more sophisticated data structure(e.g. an array or linked list)

This allows us to store multiple key-value pairs at the same index

### Linear Probing

With linear probing, when we find a collision we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index

## BIG O of Hash Tables

Average Cases:
Insertion - O(1)
Deletion - O(1)
Access - O(1)
Search - O(N)

# RECAP

- Hash Tables are a collection of key-value pairs
- Hash Tables can find values quickly given a key
- Hash Tables can add new key-values quickly
- Hash Tables store data in a large array, and work by hashing the keys
- A good hash should be fast, deterministic, and distribute keys uniformly
- Separate chaining and linear chaining are two strategies used to deal with two keys that hash to the same index
