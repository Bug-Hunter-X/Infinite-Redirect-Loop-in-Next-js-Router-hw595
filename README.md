# Infinite Redirect Loop in Next.js

This repository demonstrates a common error in Next.js applications involving infinite redirect loops. The issue arises from improper usage of the `next/router`'s `push` method, leading to a continuous redirection cycle.

## Bug Description
The `pages/about.js` component contains a button that, when clicked, triggers a redirect to itself using `router.push('/about')`. This creates an infinite loop, as the page keeps redirecting to its own URL.

## Reproduction Steps
1. Clone this repository.
2. Navigate to the `pages` directory.
3. Run `npm install` to install the necessary packages.
4. Start the development server using `npm run dev`.
5. Open the application in your browser.
6. Navigate to the About page.
7. Click the "Go back to About Page (Buggy)" button. You will observe the page continuously reloading, indicating the infinite redirect loop.

## Solution
The solution involves correcting the redirect logic in the `pages/about.js` component. Instead of redirecting to the same page, ensure the redirect targets a different route or avoids redundant navigation.