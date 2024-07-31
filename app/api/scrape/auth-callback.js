// pages/auth-callback.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');
    if (token) {
      localStorage.setItem('spotifyAccessToken', token);
      router.push('/');
    }
  }, [router]);

  return <div>Loading...</div>;
};

export default AuthCallback;
