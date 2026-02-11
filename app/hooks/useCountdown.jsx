import React, { useState, useEffect } from 'react';

const useCountDown = (date) => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    const countDown = () => {
      const countDate = new Date(date).getTime();
      const now = new Date().getTime();
      const interval = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 360;   // aproximação
      const month = year * 30;   // aproximação

      const yearNumber = Math.floor(interval / year);
      const monthNumber = Math.floor((interval % year) / month);
      const dayNumber = Math.floor((interval % month) / day);
      const hourNumber = Math.floor((interval % day) / hour);
      const minuteNumber = Math.floor((interval % hour) / minute);
      const secondNumber = Math.floor((interval % minute) / second);

      setYear(yearNumber);
      setMonth(monthNumber);
      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);
    };

    const timer = setInterval(countDown, 1000);
    return () => clearInterval(timer);   // limpa o timer quando desmontar
  }, [date]);

  return [year, month, day, hour, minute, second];
};

export default useCountDown;
