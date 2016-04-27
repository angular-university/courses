
# Installation prerequisites

To run this lesson you only need the latest node 4 and npm 3, there are no global installation prerequisites.

# Installation
Run the following command:

    npm install

This should install both the npm dependencies and the Typescript typings.

# Running the lesson code
Run the following command:

    npm start
    
You can access the running example at the following url: [http://localhost:8080](http://localhost:8080)

# Editting the lesson code

If you edit any of the Typescript files inside the `src` folder, that will trigger a Typescript recompilation. You can then refressh the browser to see the latest changes.

## Note on nodemon

The Typescript watch functionality (`tsc -w`) is reported to have long delays in certain versions of node. To avoid any issues, all the watching functionality is done using `nodemon` instead.

# Last but not least

Enjoy !
