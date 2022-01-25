import React, { useState } from 'react';
import { ProductListing } from '../API';

function ProductListing(props: ProductListing) {
    return (
        <button className="Listing">
            <div className="visualContent">
                <img src={props.ImageUrl} />
            </div>
            <div className="ListingBody">
                <div className="InfoPanel">
                    <div className="ListingInfo">
                        <h3>{props.ProductName}</h3>
                        <h1>{props.BrandName}</h1>
                        <p>{props.Description}</p>
                    </div>
                    <div className="RatingInfo">
                        <h1>{props.Rating}</h1>
                    </div>
                </div>
                <div className="CtaPanel">

                </div>
            </div>
        </button>
    );
}