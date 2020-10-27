# Reddit Post Viewer

 - The Web Frontend is built using the **Angular Framework** & Typescript.

## Prerequisites

The **Angular CLI** must be installed in order to build and run tests. The cli can be installed with the following command: 
 
    npm install -g @angular/cli

For more information on installing the Angular CLI visit this webpage https://angular.io/cli

## Steps To Build Project (after cloning project)

1. Open up an instance of Powershell and navigate to the RedditPostDisplay cloned directory.
2. Run an "npm i" command to bring in all the packages/dependencies required. (This can take a little bit of time)
3. Once the previous command completes, run "ng s -o" to serve up the application. The -o option will cause your browser window to open up at the correct http://localhost:4200/ url for the frontend.
4. Your Reddit viewer is now ready to play around in!

**Features**

 - Search for any subreddit and display the latest 10 posts
 - Page through the latest 100 posts for any given subreddit
 - Default loads the r/funny subreddit
 - Click any card to open up the Reddit posts page on Reddit

## How to Run Unit Tests

1. Navigate to the Reddit folder within a Powershell instance. 
2. From the Reddit folder ensure a "npm i" command has already been completed to install all dependencies.
3. Run the "npm t" command to run all Jasmine tests using the Karma test runner, a new browser will pop up showing the results of the latest test run. (Results may also be viewed in the console)
