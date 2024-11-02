# Important Inc. Website
### [demo link](https://cadex-test-self.vercel.app/)

## Overview
Important Inc. showcases its offerings through a two-page website built with **Next.js**, emphasizing speed, scalability, and user experience. The website features a main page with an embedded YouTube video and a contact page with a form that sends messages to the backend.

## Technologies Used
- **Frontend**: React, Next.js (TypeScript)
- **Styling**: Styled-components, Tailwind CSS
- **Component Library**: NextUI
- **State Management**: Context API
- **Backend**: Node.js (serverless functions)

### Dependencies
- `@nextui-org/react`
- `styled-components`
- `framer-motion`
- `next-themes`

## Features
- **Responsive Design**: The website is responsive and adapts to different screen sizes.
- **Sticky Header and Footer**: Both pages feature a sticky header and footer for easy navigation.
- **Embedded YouTube Video**: The main page includes an embedded video from YouTube.
- **Contact Form**: The contact page features a required form that captures user information.
- **Backend Integration**: The form submission sends data to the backend, which logs the data and responds with a thank-you message.

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/important-inc.git
    cd important-inc
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## Hosting
This project can be deployed on platforms like **Netlify**, **Vercel**, or **AWS**.

## Styling and Performance
- **Styled-components** are used for component-level styles, allowing for scoped CSS and theme management.
- **Tailwind CSS** is used for utility-first styling, providing a flexible and responsive design approach.
- **NextUI** components enhance the UI with pre-styled components, ensuring a polished and professional look.
- **SEO** and performance practices are followed, including proper heading hierarchy and accessibility considerations.

## Assumptions Made
The backend service is a serverless function capable of sending message and responding with a message.

## Additional Features
- **Social Media Preview**: Open Graph and Twitter Card meta tags are implemented for improved visibility on social media platforms. Link to scan: [opengraph](https://www.opengraph.xyz/url/https%3A%2F%2Fcadex-test-self.vercel.app)

## Acknowledgements
Thank you for reviewing my project. For any questions or further clarifications, feel free to reach out.
