# Google Books API Search Engine

## Outline

This project has been completed as a single page application in react, with SASS used for styling. The application takes a search term in as a state and uses it as a query to the google books API, then returns 10 results and displays them in cards. the request code uses Async/Await to fetch the data, then returns various elements of the data to use in the generation of a card element. One of the more difficult/annoying aspects of this project was the tendancy of the API to occasionally not return some of the data, leaving it as undefined, which would cause the search algorithm to crash periodically. this was solved through the use of ternary operators in the card holder and the addition of some placeholders for the app to return of google fails. Styling was done using SASS modules, with a colour palette based on suggestions by chatGPT. One major issue with styling was the requirement to include the book description in the card eleemnt, as this description is a block of text of indeterminate size, ranging from non existant to several paragraphs in length, making the prospective card size incredibly variable.

## Links

Github Repository: <https://github.com/MartinO55/GoogleBooks>

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button

- A grid of books
  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules.
- Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

## Bonus (optional, but highly recommended)

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
