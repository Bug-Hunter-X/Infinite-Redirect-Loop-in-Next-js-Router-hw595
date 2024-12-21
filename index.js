```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Corrected logic: Redirect to a different page or handle the click event without redirection
    router.push('/'); // Redirect to the home page
    //Alternatively, you could simply handle the click without redirecting
    //console.log('Button clicked'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```