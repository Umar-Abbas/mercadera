# Mercadera

Mercadera is the easiest way to sell your things online. 1-click sign in, take a
pic and sell - all completely free.

## Getting Started

The Mercadera project is built using Meteor 1.2 with MongoDB as the backend.
We're using Astronomy to keep records following a proper schema and validate
types. We're using React to keep our front-end UI component based, and easy to
reason about.

We hope you use this project as a good example of how to write a fast, clean
Meteor application without much ceremony.

Pull requests very welcome!

## Tech Stack

Visit our StackShare profile to see our Tech Stack.

[http://stackshare.io/sergiotapia/mercadera](http://stackshare.io/sergiotapia/mercadera)

![StackShare Tech Stack](http://i.imgur.com/b02cbpO.png)

## Project Setup

Want to the run the project locally? Great!

1. Clone the project locally.

  ```
  git clone git@github.com:danieltapia/mercadera.git
  cd mercadera
  ```

2. Create a settings.json file in your server folder. You will need to create social apps for Twitter and Facebook.

  ```
  touch server/settings.json
  {
    "facebookAppId": "",
    "facebookAppSecret": "",
    "twitterApiKey": "",
    "twitterApiSecret": ""
  }
  ```

3. Run the project.

  ```
  meteor run --settings server/settings.json
  ```

If you're having trouble running the project, please open an issue. We want the project to be easy to run for newcomers.
