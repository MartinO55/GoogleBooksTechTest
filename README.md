# Google Books API Search Engine

## Outline

This project has been completed as a single page application in react, with SASS used for styling. The application takes a search term in as a state and uses it as a query to the google books API, then returns 10 results and displays them in cards. the request code uses Async/Await to fetch the data, then returns various elements of the data to use in the generation of a card element. One of the more difficult/annoying aspects of this project was the tendancy of the API to occasionally not return some of the data, leaving it as undefined, which would cause the search algorithm to crash periodically. this was solved through the use of ternary operators in the card holder and the addition of some placeholders for the app to return of google fails. Styling was done using SASS modules, with a colour palette based on suggestions by chatGPT. One major issue with styling was the requirement to include the book description in the card element, as this description is a block of text of indeterminate size, ranging from non existant to several paragraphs in length, making the prospective card size incredibly variable.

## Links

Github Repository: <https://github.com/MartinO55/GoogleBooks>
Live: <https://643cb45991922b000882f44f--relaxed-yeot-ff920c.netlify.app/>

## MVP

Google Books Tech Test
The candidates are required to develop a basic front-end application with the following features:
Fetch and display a list of books related to flowers from the following REST API: <https://www.googleapis.com/books/v1/volumes?q=flowers>

Present the fetched data in a table, including book title, authors, and published date.

Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.

Encourage the candidates to showcase their creativity and add a personal touch to the application.

Include a README file explaining the app's features and the creative elements introduced. (use the template in the post course repo)

## Additional Features that you could add once the MVP is done (but not limited to)

Sorting books by title, author, publish date

Book search

Add search history

favouriting books (could be done with redux)

books rating system (could be done with redux)

adding personal reviews to your books (could be done with redux)

using google books API collections features

Getting good reads links and displaying them on the page

Book form for submission for books you can't find in the API (react-hook-form)
