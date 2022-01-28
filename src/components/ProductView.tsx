import { autoShowTooltip } from 'aws-amplify';
import React, { useState } from 'react';
import { ProductListing } from '../API';

function ProductView(listing: ProductListing) {

    const listingStyle: React.CSSProperties = {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        boxShadow: "0px -10px 16px 0px rgba(0,0,0,5%)",
        border: "1px solid rgba(206,206,206,0.4)",
        verticalAlign: "baseline",
        margin: "10px",
        background: "white",
        boxSizing: "border-box"
    };

    const visualContentStyle: React.CSSProperties = {
        minWidth: "200px",
        maxWidth: "200px",
        width: "100%",
        borderRight: "1px solid rgba(206,206,206,0.4)",
        padding: 30,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    };

    const figureStyle: React.CSSProperties = {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "100%",
        height: "100%",
        borderRadius: "4px"
    };

    const productImageStyle: React.CSSProperties = {
        maxWidth: "100%",
        maxHeight: "120px",
        height: "auto",
        verticalAlign: "top",
        objectFit: "scale-down",
        flex: "0 0 auto",
        border: 0,
        borderRadius: "4px"
    };

    const infoPanelStyle: React.CSSProperties = {
        flexDirection: "column",
        flexGrow: 1,
        display: "flex",
        margin: 0,
        padding: 0,
        border: 0,
        font: "inherit",
        verticalAlign: "baseline",
        boxSizing: "border-box",
        wordWrap: "break-word",
        color: "#333"
    };

    const contentStyle: React.CSSProperties = {
        padding: 30,
        margin: 0,
        border: 0,
        font: "inherit",
        verticalAlign: "baseline",
        boxSizing: "border-box",
        display: "block",
        wordWrap: "break-word"
    };

    const productNameStyle: React.CSSProperties = {
        marginBottom: "20px",
        marginTop: "0",
        display: "block",
        fontFamily: "'Lato',sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "26px",
        float: "left",
        textDecoration: "none",
        color: "#000"
    };
    
     const productBrandStyle: React.CSSProperties = {
        marginBottom: 0,
        fontSize: "22px",
        textAlign: "left",
        display: "table",
        clear: "both",
        float: "left",
        width: "100%",
        fontWeight: 900
     };

     const productDescriptionStyle: React.CSSProperties = {
         lineHeight: "22px",
         fontSize: "15px",
         float: "left"
     }

    const ratingPanelStyle: React.CSSProperties = {
        padding: "0 25px 25px",
        justifyContent: "flex-start",
        display: "flex",
        alignItems: "flex-start"
    };

    const ratingColorStyle: React.CSSProperties = {
        background: "#13964a",
        position: "static",
        width: "90px",
        fontSize: "25px",
        lineHeight: "52px",
        textAlign: "center",
        borderRadius: "4px",
        color: "#ffffff",
        fontWeight: "700"
    };

    const ctaPanelStyle: React.CSSProperties = {
        verticalAlign: "baseline",
        display: "inline-block",
        wordWrap: "break-word",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        border: 0
    };

    const ctaBlockStyle: React.CSSProperties = {
        marginBottom: "15px",
        boxSizing: "border-box",
        display: "block",
        verticalAlign: "baseline",
        height: "60px",
        minWidth: "155px",
        content: "''",
        margin: "0 auto",
        lineHeight: "20px",
        fontSize: "18px"
    };

    const ctaLinkStyle: React.CSSProperties = {
        background: "#233a7a",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "17px",
        padding: "0.65em 1.1em",
        color: "#ffffff",
        fill: "#ffffff",
        border: "none",
        textTransform: "uppercase",
        outline: 0,
        boxShadow: "-1px 6px 19px rgb(19 150 74 / 20%)",
        borderRadius: 0,
        position: "relative",
        textAlign: "center",
        display: "inline-block"
    };

    return (
        <div className="Listing" style={listingStyle}>
            <div className="visualContent" style={visualContentStyle}>
                <figure style={figureStyle}>
                    <img src={listing.ImageUrl} style={productImageStyle} />
                </figure>
            </div>
            <div className="InfoPanel" style={infoPanelStyle}>
                <div className="InfoContent" style={contentStyle}>
                    <a style={productNameStyle}>{listing.ProductName}</a>
                    <span style={productBrandStyle}>{listing.BrandName}</span>
                    <p style={productDescriptionStyle}>{listing.Description}</p>
                </div>
                <div className="RatingInfo" style={ratingPanelStyle}>
                    <div className="RatingColor" style={ratingColorStyle}>
                        <span>{listing.Rating}</span>
                    </div>
                </div>
            </div>
            <div className="CtaPanel" style={ctaPanelStyle}>
                <div className="CtaBlock" style={ctaBlockStyle}>
                    <a style={ctaLinkStyle}>BUY AT AMAZON.COM</a>
                </div>
            </div>
        </div>
    );
}

export default ProductView;