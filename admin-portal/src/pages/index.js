// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the login page on page load
        router.replace('/Login'); // Ensure this matches the filename in the pages directory
    }, [router]);

    return null; // The component doesn't render anything since it redirects
};

export default Home;
