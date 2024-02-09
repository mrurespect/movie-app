#  Movie Explorer

## Deployment and Development Versions

Movie Explorer exists in two versions:

- The production version is hosted on the `gh-pages` branch.
- The development version resides on the `master` branch.

## Authentication with Backend

To streamline the development process, the authentication code with the backend is temporarily commented out. This enables seamless testing and previewing of the application locally. When testing the authentication functionality, you can use the following credentials:

- **Email:** email@gmail.com
- **Password:** Hello

## Key Features

1. **Trending Content Exploration:** Discover the latest and most popular movies, TV series, and notable individuals in the entertainment industry.
   
2. **Detailed Information:** Access comprehensive details about movies, TV series, and industry professionals, including summaries, ratings, and release dates.

3. **User Authentication:** While the backend authentication code is commented for development purposes, users can test the authentication feature locally using the provided credentials.

4. **Responsive Design:** Ensure a consistent and user-friendly experience across different devices, including desktops, tablets, and mobile phones.

## Technology Stack

- **Frontend:** Developed with React for a dynamic and interactive user interface.
  
- **State Management:** Utilizes Redux Toolkit for effective state management.

- **Routing:** Implements React Router for client-side navigation.

- **Styling:** Styled with CSS, SCSS to achieve a clean and visually appealing design, with additional support from Bootstrap.

- **API Integration:** Fetches real-time data from external APIs using Axios to provide up-to-date information on trending content.

- **Authentication:** Utilizes JWT-decode library for handling authentication processes.

- **Development and Build Tools:** Uses TypeScript for enhanced type-checking, and integrates with tools such as React Helmet for head management.

- **Deployment:** The production version is deployed on GitHub Pages for public access, offering a stable and shareable release.

## Scripts and Commands

- `npm start:` Initiates the development server for local testing.

- `npm run build:` Generates the production build for deployment.

- `npm run deploy:` Deploys the production build to GitHub Pages.

- `serve:` Initiates the development server for the production version.

## Testing Authentication

During development, uncomment the authentication code to test the functionality. For quick access, use the provided credentials: email@gmail.com as the email and Hello as the password.

## You need to add your MovieDb  api key  
to get registred : https://developer.themoviedb.org/docs/getting-started
![image](https://github.com/mrurespect/movie-app/assets/121578147/623eb08e-4232-4d45-bf60-720080ce9c13)

path to the file : src/Context/MediaContext.jsx

