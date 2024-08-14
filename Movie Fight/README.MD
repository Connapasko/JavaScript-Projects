# Movie Fight!

## Overview

This project is a fun web application built to demonstrate knowledge of various full-stack fundamental skills and knowledge. The application allows a user to search for two movies, and upon selection the application will compare and display various stats about the movie in a fashion that depicts which movie's statistic is evaluated as "better"

## Technologies Used

    -HTML
    -CSS (Bulma)
    -JS

## Features

- **Feature 1**: Movie Search with Autocomplete

Search Input Field: The user can type in a search box to look for movies.
Dynamic Suggestions: As the user types, suggestions are fetched from the OMDB API and displayed in a dropdown list.
Option Selection: Clicking on a suggestion selects the movie and updates the corresponding side's summary.
Movie Comparison Interface

- **Feature 2**: Two Autocomplete Widgets: There are two separate autocomplete widgets, one for each side (left and right).
Side-by-Side Comparison: Allows the user to compare two movies by selecting one movie from each side.
Movie Details Display

- **Feature 3**: Movie Information: Shows detailed information about each movie, including title, genre, plot, awards, box office revenue, metascore, IMDb rating, and IMDb votes.
Summary Sections: Displays this detailed information in dedicated sections for the left and right movies.
Comparison Functionality

- **Feature 4**: Visual Comparison: Compares specific metrics (e.g., awards, box office revenue) between the two selected movies.
Highlighting: Highlights the better metric in the comparison, using different colors to indicate which movie has a superior value.
Debounced Search Input

- **Feature 5**: Debouncing: Limits the rate at which the search input handler function is executed to avoid excessive API calls and improve performance.
Responsive UI


- **Feature 6**: Dropdown Visibility: Shows and hides the dropdown based on user interactions and input results.
Click Outside to Close: Closes the dropdown menu if the user clicks outside of the autocomplete component.








