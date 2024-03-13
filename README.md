# React.js app / API Integration 

I built a react.js app called Pawesome that integrated the Dog API. I wanted to improve my API experience and also work with something I love, dogs. Its an easy way to search for dog breeds in one place if you have an interest in breeding or buying a dog. 

** Responsive design still in progress**

** Please note firebase login is work in progess and auth restricted access does not work**

## :computer: [Click here](https://pawesome-react-project.surge.sh/) to see the app!

![screenshot](/public/Images/Screenshot%202024-03-08%20at%209.49.35%20am.png)

Users can view all dog breeds on the home page and search using the search bar. 

## :page_facing_up: Features  

![screenshot](/public/Images/Screenshot%202024-03-08%20at%209.50.26%20am.png)

You can add dog breeds to the favourites page and also remove them. This adds a better user experience. 

![screenshot](/public/Images/Screenshot%202024-03-08%20at%209.51.07%20am.png)


![screenshot](/public/Images/Screenshot%202024-03-08%20at%209.52.01%20am.png)

Users can view all the dog details on each link which is all retrieved from the API. 

## :pencil2: Development Process

Firstly I initiated my development environment using Vite and Pnpm to build the project skeleton. I read through the API documentation to validate its rules and process for integration. I adopted a component based architecture for a modular and maintainable codebase. I then used fetch and Async await to get the JSON data from the API. I tested the endpoints in Postman for clarity. 

I set up several hooks to initialise state variables to be able to store each dog breed in an array, store text and search. 

I was able to map through the dog array to render each individual dog breed and display them on the page with their name and image. I had a problem with the main end point not having the image url within the JSON where all the main dog details were. I was stuck on how I could retrieve this information from two different end points as they did have an option to get an individual image from another end point. Eventually I worked out that I could just use the reference_image_id available in a different JSON file which made things much simpler. I just used this end point when rendering with the img src instead of extracting and merging the data from 2 different ones. 

I made sure I had a functional router access for each page using React-Router. 

Another problem I came across was trying to resolve how to render the favourite dog breeds on another page. I realised after talking with my tutor I had to lift my hook and use it in my parent component so I could pass the props (favourites, addToFavourites, removeFromFavourites) to the child components for this to work. 

I also learned how to use firebase authentication to register and login users using hooks and state management connecting to their console and api. This is still work in progress but you can register and login. I have not implemented auth restriction yet. 


## :rocket: Technologies used

JavaScript, React.js, React-Router, Vite, API, HTML, CSS, Firebase. 


## :white_check_mark: Future updates

- Implement filter feature.
- Implement more responsive design. 
- Create button change when favourites are added. 