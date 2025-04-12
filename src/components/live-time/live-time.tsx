import { useState, useEffect } from 'react';
import './live-time.css'

export default function LiveTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();

    return (
        <span className='live-time'>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}
        </span>
    );
};
