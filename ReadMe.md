Boston Travel Guide - SCSS Project

Project Overview

This project is a travel guide website for Boston. The website includes information about the city’s attractions, upcoming events, and history. The primary goal of this project is to demonstrate the implementation of CSS Grid layout, Flexbox layout, and SCSS features in a responsive, modern design.

Table of Contents

	•	Features of the Website
	•	SCSS Features Implemented
	•	File Structure
	•	How to Run the Project

Features of the Website

	1.	Home Page: Provides an overview of Boston with a list of featured attractions.
	2.	Attractions Page: A card-based layout showcasing iconic Boston landmarks using CSS Grid and Flexbox.
	3.	Events Page: A responsive layout displaying upcoming events, including the option to register for each event.
	4.	About Page: Information about Boston’s rich history and cultural significance.
	5.	Responsive Design: The website is fully responsive, with layouts that adapt to small, medium, and large screens, including mobile and tablet views.

Key Pages

	•	Home Page: Hero section with a CTA button, and a grid-based featured attractions section.
	•	Attractions Page: Flexbox layout for iconic Boston landmarks.
	•	Events Page: Grid layout displaying upcoming events with “Register Now” buttons.
	•	About Page: Grid layout with Boston’s history and cultural details.
	•	Navbar: Fully responsive navbar that collapses into a hamburger menu on smaller screens.

SCSS Features Implemented

This project heavily uses SCSS to manage and scale the styling of the website. Here are the SCSS features that have been utilized:

1. Variables

	•	Variables are used to define colors, font stacks, and base spacings for consistency and reusability throughout the stylesheets.
	•	Example:
```scss
$primary-color: #82bccf;
$secondary-color: #FFFFFF;
$base-spacing: 16px;
```


2. Custom Properties (CSS Variables)

	•	Though not heavily used, CSS custom properties could be implemented in the future for additional flexibility.

3. Nesting

	•	Nesting is used to keep the structure of CSS cleaner by placing related styles together in a hierarchical manner.
	•	Example:
```scss
header {
  .container {
    .logo {
      img {
        max-width: 250px;
      }
    }
  }
}
```


4. Interpolation

	•	Interpolation allows for the dynamic use of variables within property values or selectors.
	•	Example:
```scss
.col-#{$size} {
  width: #{$size * 10}%;
}

```

5. Placeholder Selectors

	•	Placeholders are used to define common styles that can be extended throughout the project, keeping the code DRY (Don’t Repeat Yourself).
	•	Example:
```scss
%centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
```


6. Mixins

	•	Mixins are used to create reusable blocks of code, reducing redundancy.
	•	Example:
```scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
```


7. Functions

	•	Functions are used to perform calculations or return values for use in styles.
	•	Example:
```scss
@function calc-rem($size) {
  @return $size / 16 * 1rem;
}
```


8. Extend/Inheritance

	•	Extend is used to share styles between different elements by inheriting from placeholder selectors.
	•	Example:
```scss
.button {
  @extend %centered;
}
```


9. Responsive Media Queries

	•	Custom breakpoints are used to create responsive designs that adapt to different screen sizes.
	•	Example:
```scss
@mixin respond($breakpoint) {
  @if $breakpoint == 'small' {
    @media (max-width: 600px) { @content; }
  } @else if $breakpoint == 'medium' {
    @media (max-width: 900px) { @content; }
  }
}
```


10. Color Manipulation Functions

	•	SCSS’s built-in color functions are used to manipulate colors, such as darken() and lighten().
	•	Example:

```scss
background-color: lighten($primary-color, 10%);
```


11. Math Functions

	•	SCSS math functions, like math.div(), are used to perform arithmetic calculations in stylesheets.
	•	Example:
```scss
gap: math.div($base-spacing, 2);
```


12. Grid Layout

	•	CSS Grid is used to structure layouts on various pages, particularly for the featured attractions and event sections.
	•	Example:
```scss
@mixin grid-layout($columns) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $base-spacing;
}
```


13. Flexbox Layout

	•	Flexbox is used to align content horizontally and vertically across the website, including the navbar and various sections.
	•	Example:
```scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
```


File Structure

The project is organized into separate folders for SCSS files and assets.
```plaintext
/scss
  ├── components
  │   ├── _buttons.scss        // Styles for buttons
  │   ├── _footer.scss         // Styles for the footer section
  │   ├── _header.scss         // Styles for the header section (navbar)
  ├── pages
  │   ├── _about.scss          // Styles for the About page
  │   ├── _attraction.scss     // Styles for the Attractions page
  │   ├── _events.scss         // Styles for the Events page
  │   ├── _home.scss           // Styles for the Home page
  ├── utils
  │   ├── _placeholders.scss   // Placeholder selectors for reusable styles
  │   ├── _mixins.scss         // Mixins for reusable CSS blocks
  │   ├── _variables.scss      // SCSS variables for colors, spacing, and typography
  ├── style.scss               // Main SCSS file that imports all other partials and compiles into CSS
/assets
  ├── favicon_io               // Contains the favicon assets for the website
  ├── fontawesome-free-6.6.0-web // Font Awesome icons
  ├── images                   // Images used in the website (e.g., logo, attractions)
/css
  ├── style.css                // Compiled CSS file from SCSS
index.html                     // Home page of the website
about.html                     // About page of the website
attraction.html                // Attractions page of the website
events.html                    // Events page of the website
ReadMe.md                      // Project documentation file
script.js                      // JavaScript file for interactivity (e.g., hamburger menu).html
about.html
```
SCSS File Structure

	•	Components: Contains styles for individual components such as the header, footer, and buttons.
	•	Pages: Each page (home, about, attractions, events) has its own SCSS file for layout and design.

How to Run the Project

	1.	Clone the repository from GitHub:

git clone https://github.com/singhvart/INFO_6150_Assignment_6


	2.	Navigate to the project directory:

cd boston-travel-guide


	3.	Open index.html in your preferred browser to view the homepage.
	4.	The SCSS files are compiled into css/style.css for the browser to render the styles.

Conclusion

This project demonstrates the power and flexibility of SCSS in a real-world website project, incorporating best practices like modularity, reusability, and responsiveness. It showcases a variety of SCSS features such as variables, mixins, functions, grid and flexbox layouts, and responsive media queries.
