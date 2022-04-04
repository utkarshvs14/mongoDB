use mongo_practice
'switched to db mongo_practice'

db
mongo_practice

db.movies.insertOne({title:"Pulp Fiction",
  writer:"Quentin Tarantino",
  year:"1994",
  actors:["John Travolta","Uma Thurman"]})
{ acknowledged: true,
  insertedId: ObjectId("624aef1664fd49b12b4dd6b5") }

  db.movies.insertMany([{
    title:"Inglorious Basterds",
    writer:"Quentin Tarantino",	
    year:"2009",
    actors:["Brad Pitt", "Diane Kruger", "Eli Roth"]
  },
  {
    title:"The Hobbit: An Unexpected Journey",
    writer:"J.R.R.Tolkein",
    year:"2012",
    franchise:"TheHobbit"
  },
  {
    title:"The Hobbit: The Desolation of Smaug",
    writer:"J.R.R.Tolkein",
    year:"2013",
    franchise:"TheHobbit"
  },
  {
     title:"The Hobbit: The Battle of the Five Armies",
     writer:"J.R.R.Tolkein",
     year:"2012",
     franchise:"The Hobbit", 
     synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of arising darkness."
  },
  {
      title:"Pee Wee Herman's Big Adventure"
  },
  {  
      title:"Avatar"
  }
    ])
  { acknowledged: true,
    insertedIds: 
     { '0': ObjectId("624af05e64fd49b12b4dd6b6"),
       '1': ObjectId("624af05e64fd49b12b4dd6b7"),
       '2': ObjectId("624af05e64fd49b12b4dd6b8"),
       '3': ObjectId("624af05e64fd49b12b4dd6b9"),
       '4': ObjectId("624af05e64fd49b12b4dd6ba"),
       '5': ObjectId("624af05e64fd49b12b4dd6bb") } }

       1.get all documents

       db.movies.find().pretty()
{ _id: ObjectId("624ad01ccdbc0d9f9a43fac4"),
  title: 'Fight Club',
  writer: 'Chuck Palahniuko',
  year: '1999',
  actors: [ 'Brad Pitt', 'Edward Nortan ' ] }
{ _id: ObjectId("624aef1664fd49b12b4dd6b5"),
  title: 'Pulp Fiction',
  writer: 'Quentin Tarantino',
  year: '1994',
  actors: [ 'John Travolta', 'Uma Thurman' ] }
{ _id: ObjectId("624af05e64fd49b12b4dd6b6"),
  title: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: '2009',
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }
{ _id: ObjectId("624af05e64fd49b12b4dd6b7"),
  title: 'The Hobbit: An Unexpected Journey',
  writer: 'J.R.R.Tolkein',
  year: '2012',
  franchise: 'TheHobbit' }
{ _id: ObjectId("624af05e64fd49b12b4dd6b8"),
  title: 'The Hobbit: The Desolation of Smaug',
  writer: 'J.R.R.Tolkein',
  year: '2013',
  franchise: 'TheHobbit' }
{ _id: ObjectId("624af05e64fd49b12b4dd6b9"),
  title: 'The Hobbit: The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: '2012',
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of arising darkness.' }
{ _id: ObjectId("624af05e64fd49b12b4dd6ba"),
  title: 'Pee Wee Herman\'s Big Adventure' }
{ _id: ObjectId("624af05e64fd49b12b4dd6bb"), title: 'Avatar' }

       2.get all documents with writer set to "Quentin Tarantino"

       db.movies.find({writer : "Quentin Tarantino"})
{ _id: ObjectId("624aef1664fd49b12b4dd6b5"),
  title: 'Pulp Fiction',
  writer: 'Quentin Tarantino',
  year: '1994',
  actors: [ 'John Travolta', 'Uma Thurman' ] }
{ _id: ObjectId("624af05e64fd49b12b4dd6b6"),
  title: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: '2009',
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }


       3.get all documents whereactorsinclude "Brad Pitt"

       db.movies.find({actors: "Brad Pitt"}).pretty()
{ _id: ObjectId("624ad01ccdbc0d9f9a43fac4"),
  title: 'Fight Club',
  writer: 'Chuck Palahniuko',
  year: '1999',
  actors: [ 'Brad Pitt', 'Edward Nortan ' ] }
{ _id: ObjectId("624af05e64fd49b12b4dd6b6"),
  title: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: '2009',
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }


       4.get all documents withfranchiseset to "The Hobbit"

       db.movies.find({franchise: "TheHobbit"}).pretty()
{ _id: ObjectId("624af05e64fd49b12b4dd6b7"),
  title: 'The Hobbit: An Unexpected Journey',
  writer: 'J.R.R.Tolkein',
  year: '2012',
  franchise: 'TheHobbit' }
{ _id: ObjectId("624af05e64fd49b12b4dd6b8"),
  title: 'The Hobbit: The Desolation of Smaug',
  writer: 'J.R.R.Tolkein',
  year: '2013',
  franchise: 'TheHobbit' }


       5.get all movies released in the 90s
       db.movies.find({year:{ $gte :  "1990"}}).limit(2)
       6.get all movies released before the year 2000 or after 2010
       db.movies.find({$and: [{"year":{$gte:"2000"}},{"year" : {$lte : "2010"}}]})

#RELATIONAL

       db.createCollection('users');
2. use users
3. db.users.insertMany( [ { username: "GoodGuyGreg", first_name: "GoodGuy", last_name: "Greg" },{ username: "ScumbagSteve", first_name: "Scumbag", last_namelast_name: "Steve"}  ] )
4. db.createCollection('posts');
5. use posts
6. db.posts.insertMany( [ {username:"GoodGuyGreg", title: "Passes out party", body: "Wakes up early and cleans house"}, { username: "GoodGuyGreg", title: "Steals your identity", body: "Raises your credit score" }, { username: "GoodGuyGreg", title: "Reports a bug in your code", body: "Sends you a Pull Request" },{ username: "ScumbagSteve", title: "Borrows something", body: "Sells it"},{ username: "ScumbagSteve", title: "Borrows everything", body: "The end"},{ username: "ScumbagSteve", title: "Forks your repo on github", body: "The end"}  ] )
7.db.createCollection('comments');
8.use comments
9.db.comments.insertMany( [ { username: "GoodGuyGreg", comment: "Hope you got a good deal!", post: "Borrows something"}, { username: "GoodGuyGreg", comment: "What's mine is yours!", post: "Borrows everything" }, { username: "GoodGuyGreg", comment: "Don't violate the licensing agreement!", post: "Forks your repo on github" },{ username: "ScumbagSteve", comment: "It still isn't clean", post: "Passes out at party"}, { username: "ScumbagSteve", comment: "Denied your PR cause i found a hack", post: "Reports a bug in your code" }  ] )
10.use users
11.db.users.find().pretty()
12.db.posts.find().pretty()
13.use posts
14.db.posts.find({username: "GoodGuyGreg"}).pretty()
15.db.posts.find({username: "ScumbagSteve"}).pretty()
16.use comments
17.db.comments.find({username: "ScumbagSteve"}).pretty()
18.db.comments.find({username: "GoodGuyGreg"}).pretty()
19.db.comments.find({post: "Reports a bug in your code"}).pretty()