This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Next.js Assignment README

This repository contains the code for a Next.js assignment project. The project utilizes several dependencies to implement various features including authentication, data fetching, state management, form handling, pagination, filtering, and sorting. Below is an overview of the dependencies used in this project:

Dependencies:
@headlessui/react (^1.7.19): A library for creating accessible UI components.
@heroicons/react (^2.1.3): A set of icons designed for use in web applications.
axios (^1.6.8): A promise-based HTTP client for making requests to APIs.
cookie (^0.6.0): A library for handling cookies in the browser.
flowbite (^2.3.0): A CSS framework for building responsive web designs.
flowbite-react (^0.9.0): React components library based on Flowbite CSS.
jsonwebtoken (^9.0.2): A library for generating and verifying JSON Web Tokens (JWT).
next (14.2.3): The Next.js framework for building React applications.
react (^18): The React library for building user interfaces.
react-dom (^18): React's package for working with the DOM.
react-hook-form (^7.51.4): A library for managing form state and validation in React.
react-icons (^5.2.0): A collection of popular icons for React applications.
react-query (^3.39.3): A library for managing asynchronous data in React applications.
react-redux (^9.1.2): Official React bindings for Redux state management library.
react-toastify (^10.0.5): A library for displaying toast notifications in React applications.
redux (^5.0.1): A predictable state container for JavaScript applications.
Features Implemented:
Authentication:
Implemented login and register APIs.
Utilized JSON Web Tokens (JWT) for authentication.
State Management:
Used Redux store to manage user data.
Stored filter settings in Redux for easy access and modification.
Data Handling:
Fetched data from APIs using Axios and React Query.
Handled form state and validation using React Hook Forms.
UI Components:
Utilized Headless UI components for building accessible UI elements.
Incorporated Heroicons for visual icons in the application.
Pagination, Filtering, and Sorting:
Implemented pagination to display large datasets.
Added keyword-based filtering and sorting by date for enhanced user experience.
Additional Features:
Integrated React-Query for efficient API data fetching and caching.
Enhanced form handling with React Hook Forms for better performance and usability.
Running the Project:
To run this project locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Start the development server using npm run dev.
Open your browser and visit http://localhost:3000 to view the application.
Additional Notes:
Ensure that you have Node.js and npm installed on your machine.
This project follows best practices for React and Next.js development.
Feel free to explore the codebase and customize it as per your requirements.
