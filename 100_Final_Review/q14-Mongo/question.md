## Question A:

(
    You may use a live connection to ACC Software Bootcamp mongo db:

        host: pgdb.accsoftwarebootcamp.com
        port: 27017

    It is the same as was used in the class.

    You may also connect to your local mongo database started by running `mongod`
)

Suppose you are run the following code on a MongoDB database

    db.things.insert( { type : ['dog', 'cat'] } );
    db.things.insert( { type :  ['cat'] } );
    db.things.insert( { type : ['cow'] } );
    db.things.insert( { egg: ['duck', 'hen', 'ostrich']  } );

On the data written above, write a mongo query that would return unique 
values of each of the keys
	- type, 
    - egg, 
    - hello // non existent


## Question B:

In the above database, how would you count the number of mongo documents which contain a type "cat".

