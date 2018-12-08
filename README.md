# OMDb API GraphQL Wrapper

> Easily use [OMDb API](http://www.omdbapi.com/) with [GraphQL](https://graphql.org/) :rocket:


**[Demo :wrench:](https://omdb-graphql.now.sh)**

## Setup a server:

1. Clone this repository
2. Run `npm install`
3. Get the OMDb API key and paste it in the [`config.json`](https://github.com/xxczaki/omdb-graphql-wrapper/blob/master/src/config.json) file
4. Run `npm run dev` to start the server in the development mode
5. Go to [localhost:2121](http://localhost:2121/) and play with the GraphQL Playground
6. If you want to build the server, run `npm run build` and then `npm start` to start the server from the recently created `dist` directory.

## Usage

> Check out the [GraphQL documentation](https://graphql.github.io/learn/) first!

### Queries

**Using the movie title:**

```graphql
{
  ByTitle(title: "Matrix") {
    Title
    Year
    Rated
    Plot
    Genre
  }
}
```

**Using IMDb ID**

```graphql
{
  ById(id: "100") {
    Director
    Actors
    Country
  }
}
```

### Fields:

#### Title

Returns: `string`

Title of the movie/tv show

#### Year

Returns: `string`

Year the movie was released

#### Rated

Returns: `string`

Movie rating (eg. 12+)

#### Released

Returns: `string`

Full date of release

#### Runtime

Returns: `string`

Runtime of the movie

#### Genre

Returns: `string`

Genre(s) of the movie

#### Director

Returns: `string`

Movie Director(s)

#### Writer

Returns: `string`

Movie Writer(s)

#### Actors

Returns: `string`

Actors

#### Plot

Returns: `string`

Plot

#### Language

Returns: `string`

Language(s)

#### Country

Returns: `string`

Country or countries where the movie was made

#### Awards

Returns: `string`

Awards

#### Poster

Returns: `string`

Link to a movie poster

#### Metascore

Returns: `string`

Metascore

#### imdbRating

Returns: `string`

Rating from IMDb

#### imdbVotes

Returns: `string`

Number of votes from IMDb

#### Type

Returns: `string`

Type (movie, tv show etc.)

#### DVD

Returns: `string`

DVD release date

#### BoxOffice

Returns: `string`

Box Office

#### Production

Returns: `string`

Production company

#### Website

Returns: `string`

Website of the movie

#### Response

Returns: `string`

Check, if there was a response from OMDb

### License 

MIT
