import React from 'react';

export default function Slider({slides}) {
    return (
        <div className='slider'>
            {
                slides.map(
                    (slide, i) => (
                        <img
                            key={`slide-${i}`}
                            className={`slide${i+1}`}
                            src={slide}
                            alt={slide}
                        />
                    )
                )
            }
        </div>
    )
}