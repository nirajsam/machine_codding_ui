import React, { useEffect, useState } from 'react';
import './box.css';

const Box = () => {
  const [color, setColor] = useState([]);
  const [chg, setChg] = useState(false);

  const paintBox = (x) => {
    let arr = [...color];
    if (arr.indexOf(x) !== -1) {
      arr.splice(arr.indexOf(x), 1);
    } else {
      arr.push(x);
    }
    setColor(arr);
  };

  const getBoxes = () => {
    return [0, 1, 2].map((i) => {
      return [0, 1, 2].map((j) => {
        if (!(i === 1 && j > 0)) {
          return (
            <div
              key={`${i}${j}`}
              className={`box ${color.indexOf(`${i}${j}`) !== -1 ? 'red' : ''}`}
              onClick={() => paintBox(`${i}${j}`)}
     ></div>
          );
        }
        return <div key={`${i}${j}`}></div>;
      });
    });
  };

  const removeColor = (removeDone) => {
    let timer;
    if (removeDone) {
      window.location.reload(true);
    }
    timer = setInterval(() => {
      setColor((prevArray) => {
        if (prevArray.length > 0) {
          const newArray = [...prevArray];
          newArray.splice(0, 1);
          return newArray;
        }     return prevArray;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  };

  useEffect(() => {
    if (color.length === 6) {
      setChg(true);
    } else if (color.length === 0 && chg) {
      removeColor(true);
      setChg(false);
    }
  }, [color, chg]);

  useEffect(() => {
    if (chg) {
      removeColor();
    }
  }, [chg]);

  return (
    <div className="boxgp">
      <div className="boxContainer">{getBoxes()}</div>
    </div>
  );
};

export default Box;
