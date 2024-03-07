import React from "react";

const CardTestimonial = ({type, alcohol, bitterness, density}) => {
    const maxAlcohol = 16;
    const maxBitterness = 40;
    const maxDensity = 40;

    const alcoholPercentage = Math.round((alcohol / maxAlcohol) * 100) || 0;
    const alcoholStyle = {width: `${alcoholPercentage}%`};

    const bitternessPercentage = Math.round((bitterness / maxBitterness) * 100) || 0;
    const bitternessStyle = {width: `${bitternessPercentage}%`};

    const densityPercentage = Math.round((density / maxDensity) * 100) || 0;
    const densityStyle = {width: `${densityPercentage}%`};
    const testClass = type !== 'alcohol' ? 'd-none' : 'card__testimonial';
    return (
        <div className={testClass}>
            <div className="card__test-item">
                <h6 className="card__test-title">Міцність</h6>
                <p className="card__test-value">{alcohol || '0'} %</p>
                <div className="card__test-progress">
                    <div style={alcoholStyle} className="card__test-progress-value"></div>
                </div>
            </div>
            <div className="card__test-item">
                <h6 className="card__test-title">Гіркота</h6>
                <p className="card__test-value">{bitterness || '0'} IBU</p>
                <div className="card__test-progress">
                    <div style={bitternessStyle} className="card__test-progress-value"></div>
                </div>
            </div>
            <div className="card__test-item">
                <h6 className="card__test-title">Щільність</h6>
                <p className="card__test-value">{density || '0'} %</p>
                <div className="card__test-progress">
                    <div style={densityStyle} className="card__test-progress-value"></div>
                </div>
            </div>
        </div>
    );
};

export default CardTestimonial;