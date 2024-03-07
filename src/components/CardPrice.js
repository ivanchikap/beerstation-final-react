import React from "react";

const CardPrice = ({metering, discountType, price, discountedPrice}) => {
    return (
        <div className="card__price">
            <div className="card__price-value">
                <span className={discountType === "lowerPrice" ? "line-through" : ""}>{price}</span>
                {discountType === "lowerPrice" && (<p>{discountedPrice}</p>)}
            </div>

            {metering && (
                <span>за {metering}</span>
            )}
        </div>
    );
};

export default CardPrice;