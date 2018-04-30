# GraphQL
QraphQL is only a specification.
Query Language and server-side .

## Important Concepts
### SDL (Schema Definition Language)
1. Define simple types
```graphql
type Person {
    name: String!
    age: Int!
}
```
```graphql
type Post {
    title: String!
} 
```
`!` means required

2. Add a relation
```
type Post {
    title: String!
    author: Person!
}
```
```
type Person {
    name: String!
    age: Int!
    posts: [Post]!
}
```

### Fetch Data with queries
1. Get name of person 

Query
```graphql
{
    allPersons {
        name
    }
}
`allPersons` is called root node
```
Response
```json
{
    "allPersons": [
        {"name":"Johnny"},
        {"name":"Sarah"},
        {"name":"Alice"}
    ]
}
```

We only get the data we query for.
2. Get name and age of a person

Query
```graphql
{
    allPersons {
        name
        age
    }
}
```
Response
```json
{
    "allPersons": [
        {"name":"Johnny", "age": 23},
        {"name":"Sarah", "age": 24},
        {"name":"Alice", "age": 20}
    ]
}
```

3. Get the last two people stored in the database

Query
```graphql
{
    allPersons(last: 2) {
        name
        age
    }
}
```
Response
```json
{
    "allPersons": [
        {"name":"Johnny", "age": 23},
        {"name":"Sarah", "age": 24},
        {"name":"Alice", "age": 20}
    ]
}
```

4. Query nested information

Query
```graphql
{
    allPersons  {
        name
        posts {
            title
        }
    }
}
```

Response 
```json
{
  "data": {
    "allPersons": [
      {
        "name": "Johnny",
        "age": 23,
        "posts": [
          {
            "title": "GraphQL is awesome"
          },
          {
            "title": "Relay is a powerful GraphQL Client"
          }
        ]
      },
      {
        "name": "Sarah",
        "age": 20,
        "posts": [
          {
            "title": "How to get started with React & GraphQL"
          }
        ]
      },
      {
        "name": "Alice",
        "age": 20,
        "posts": []
      }
    ]
  }
}
```

### Write Data with *mutation*
1. Create
2. Update
3. delete

```graphql
mutation {
    createPerson(name: "Bob", age: 36) {
        name
        age
    }
}
```
Pass in arguments for a person. Retrieve name and age back.

Response
```json
{
    "createPerson": {
        "name": "Bob",
        "age": 36
    }
}
```

### Realtime Updates with Subscriptions
```graphql
subscription {
    newPerson {
        name
        age
    }
}
```

Whenever there's a new person, the server will push the person to the subscribed client.

### The GraphQL Schema
* Defines capabilities of the API by specifying how a client fetch and update data
* represents contract between client and server
* collection of GraphQL types with special root types

#### 3 Root Types
Besides custom types like Person and Post, GraphQL comes with 3 root types.


```graphql
type Query {
    ...
}
type Mutation {
    ...
}
type Subscription {
    ...
}
```

--------------
To use this query 
```graphql
{
    allPersons {
        name
    }
}
```
We need to add this query type to the schema
```graphql
type Query {
    allPersons(last: Int): [Person!]!
}
```
-----------------------------------
To use this mutation
```graphql
{
    createPerson(name: "John", age: 36) {
        name
    }
}
```

```graphql
type Mutation {
    createPerson(name: String!, age: Int!): Person!
}
```

--------
To use this subscription
```graphql
subscription {
    newPerson {
        name
        age
    }
}
```

```graphql
type Subscription {
    newPerson: Person!
}
```

Now let's enhance the schema for CRUD operations
```graphql
# types
type Person {
    ID: String!
    name: String!
    age: Int!
    posts: [Post!]!
}

type Post {
    ID: String!
    title: String!
    author: Person!
}

# Query, Mutation & Subscription
type Query {
    allPersons(last: Int): [Person!]!
    allPosts(last: Int): [Post!]!
}

type Mutation {
    createPerson(name: String!, age: Int!): Person!
    updatePerson(id: ID!, name: String!, age: Int!): Person! # The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.

}
```
### Resolver functions
Each field in the query comes with a resolver function in the backend. That's how we fetch the data under the hood.


## My feeling
1. The type definition resembles Typescript. Strongly typed.
2. Concise
3. No semicolon needed


## Q&A
