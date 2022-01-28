import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import { getCategoryPage } from './graphql/queries';
import ProductView from './components/ProductView';
import CategoryView from './components/CategoryView';
import { ProductListing, CategoryPage, ModelProductListingConnection } from './API';

function App() {

  let sampleListing: ProductListing = {
    __typename: "ProductListing",
    productId: "00000",
    ProductName: "Super Amazing Awesome Hand Held Telescope",
    ProductType: "Sample",
    BrandName: "RealCompany",
    Rating: 10.0,
    Description: "Do you really need a description of a sample product?",
    ImageUrl: "https://roxant.com/wp-content/uploads/2020/07/514RStoCUwL._AC_SL1029_-1.jpg",
    Categories: [],
    categoryPage: null,
    Rank: 1,
    Tags: null,
    ReferralUrl: null,
    createdAt: "nunya",
    updatedAt: "bizness",
    categoryPageListingsId: "00000"
  };

  let sampleListingConnection: ModelProductListingConnection = {
    __typename: "ModelProductListingConnection",
    items: [sampleListing],
    nextToken: null
  };

  let sampleCategory: CategoryPage = {
    __typename: "CategoryPage",
    id: "00000",
    ProductType: "Sample",
    Categories: [],
    Listings: sampleListingConnection,
    PageTitle: "Sample Category",
    PageSubtitle: "Of Jan 2022",
    createdAt: "notin",
    updatedAt: "use"
  };

  return (
    <div className="App">
      <CategoryView {...sampleCategory} />
    </div>
  );
}

export default App;
