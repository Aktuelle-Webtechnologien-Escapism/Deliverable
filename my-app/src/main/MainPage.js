import React, { useState, useEffect } from 'react';
import HelloWorld from '../services/HelloWorld';

function MainPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchHelloWorld() {
      const response = await HelloWorld.getHelloWorld();
      setMessage(response.data);
    }

    fetchHelloWorld();
  }, []);

  return (
    <div>
      {/* <h1>Hello World!</h1> */}
      <p>{message}</p>
    </div>
  );
}

export default MainPage;