import React, { useState } from 'react';
import { CategoryPage, ProductListing } from '../API';
import ProductView from './ProductView';

function CategoryView(category: CategoryPage) {

    const categoryHeaderStyle: React.CSSProperties = {
        background: "#233a7a",
        marginBottom: "20px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "20px",
        paddingBottom: "20px",
        paddingTop: "10px",
        color: "#fff",
        justifyContent: "space-between"
    };

    const headerContentStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "start"
    };

    const pageTitleStyle: React.CSSProperties = {
        fontSize: "38px",
        lineHeight: "40px",
        margin: "0 0 20px 0",
        wordBreak: "break-word",
        verticalAlign: "baseline"
    };

    const pageSubtitleStyle: React.CSSProperties = {
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
        position: "relative",
        verticalAlign: "baseline",
        marginBottom: "10px"
    };

    const categoryListingStyle: React.CSSProperties = {
        marginTop: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center"
    };

    console.log(category);

    function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
        return value !== null && value !== undefined;
    }

    function rankSort(first: ProductListing, second: ProductListing): number {
        return first.Rank - second.Rank;
    }

    const filteredListings: Array<ProductListing> = category?.Listings?.items.filter(notEmpty) ?? [];
    const rankedList: Array<ProductListing> = filteredListings.sort(rankSort);

    return (
        <div className='Category'>
            <div className='categoryHeader' style={categoryHeaderStyle}>
                <div style={headerContentStyle}>
                    <h1 style={pageTitleStyle}>{category.PageTitle}</h1>
                    <span style={pageSubtitleStyle}>{category.PageSubtitle}</span>
                </div> 
            </div>
            <div className='categoryListings' style={categoryListingStyle}>
                {
                    rankedList.map((listing: ProductListing) => (
                        <ProductView key={listing.productId} {...listing} />
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryView;