import React, { useEffect, useState } from 'react';

function Progress({ progress }) {
    const [animation, setAnimation] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimation(progress), 100);
    }, [progress]);

    return (
        <div className="outer">
            <div
                className="inner"
                style={{
                    // width: `${animation}%`,
                    transform: `translateX(${animation - 100}%)`,
                    color: animation < 5 ? 'black' : 'white',
                }}
                role="progressbar"
                aria-valuenow={animation}
                aria-valuemax="100"
                aria-valuemin="0"
            >
                {animation}%
            </div>
        </div>
    );
}

export default Progress;
