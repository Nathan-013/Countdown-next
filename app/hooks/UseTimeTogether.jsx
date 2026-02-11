import { useState, useEffect } from 'react';

const useTimeTogether = (startDate) => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();

      if (minutes < 0) {
        minutes += 60;
        hours--;
      }

      if (hours < 0) {
        hours += 24;
        days--;
      }

      if (days < 0) {
        const daysInPrevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += daysInPrevMonth;
        months--;
      }

      if (months < 0) {
        months += 12;
        years--;
      }

      setTime({ years, months, days, hours, minutes });
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // atualiza a cada minuto

    return () => clearInterval(timer);
  }, [startDate]);

  return time;
};

export default useTimeTogether;
