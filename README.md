# WeLoveMovies-backend
### WeLoveMovies keeps track of movies and theaters, as well as which movies are showing where.
### This server provides backend support for their catalogue of theaters and movies.

## Tools and Dependencies
This project relies on the following key tools and libraries:
  - Node.js: node forms the basis of the application helping to manage packages and scripts
  - Express.js: the server instance is generated by Express; additional routing functionality is also implemented using the Express library
  - Knex.js: This package enables queries to be made to the remote database storing
  - Data Storage: data is stored in a private PostgreSQL database, queries are formatted to match this relational database type

## Spinning the Server
To run this server locally, clone this repo and run the following command in the terminal: 
```bash
npm install
```
```bash
npm run start
```
Alternatively, if one wants to see changes to the local repo implemented in real-time:
```bash
npm run start:dev
```

## Routes and Request Methods
### with Expected Responses
Requests may be made to the following routes with listed HTTP methods:

#### Movies
1. `/movies`
  - GET 
    - Ex. Response
    ```json
    {
      data: {
        [
          complete list of all movie objects currently showing
        ]
      }
    }
    ```

2. `/movies/:movieId`
  - GET 
    - Ex. Response
    ```json
    {
      data: {
        movie_id: **ID MATCHING REQUEST PARAMETER**
        title: "title of movie"
        description: "description of movie"
        runtime_in_minutes: 104
        image_url:  "link to associated image"
        rating: "rating (PG, G, R etc.)"
      }
    }
    ```
#### Reviews
1. `/reviews`
  - GET
    - Ex. Response
    ```json
    {
      data: {
        [
          complete list of all reviews objects
        ]
      }
    }
    ```

4. `reviews/:reviewId` 
  - PUT 
    - Ex. Response
    ```json
    {
      data: {
      }
    }
    ```
  - DELETE
    - Ex. Response `STATUS 204`
