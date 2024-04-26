import React, { useEffect, useState } from 'react';

function UseLocalStroage(key, defoult) {
  const [value, setValue] = useState(() => {
    let currentvalue;

    try {
      currentvalue = JSON.parse(localStorage.getItem(key) || String(defoult));
    } catch (error) {
      console.log(error);
      currentvalue = defoult;
    }

    return currentvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseLocalStroage;
