import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import axios from 'axios';
import { getCategoryPage } from './graphql/queries';
import CategoryView from './components/CategoryView';
import { GetCategoryPageQuery, GetCategoryPageQueryVariables } from './API';
import Category from './components/CategoryModel';
import ProductModel from './components/ProductModel';

function App() {

  const [category, setCategory] = useState<Category | undefined>(undefined);
  const axios = require('axios').default;

  async function fetchAppSyncCategory() {
    try {
      const args : GetCategoryPageQueryVariables = {
        ProductType: "Sample"
      };
      const response = await API.graphql({ 
        query: getCategoryPage,
        variables: args
      }) as { data: GetCategoryPageQuery };
      console.log(response);
      const categoryPage = response.data.getCategoryPage;
      if (categoryPage)
      {
        let category: Category = {
          PageTitle: categoryPage.PageTitle,
          PageSubtitle: categoryPage.PageSubtitle,
          ProductType: categoryPage.ProductType,
          Categories: [],
          Listings: []
        };
        
        for (let i = 0; i < (categoryPage.Listings?.items.length ?? 0); i++) {
          let item = categoryPage.Listings?.items[i];
          if (item)
          {
            let product: ProductModel = {
              productId: item.productId,
              ProductName: item.ProductName,
              ProductType: item.ProductType,
              BrandName: item.BrandName,
              Rating: item.Rating,
              Description: item.Description,
              ImageUrl: item.ImageUrl,
              Categories: item.Categories,
              Rank: item.Rank
            }

            category.Listings.push(product);
          }
        }

        setCategory(category);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  async function fetchHasuraCategory() {
    try {
      let response = await axios({
        url: 'https://noble-mink-21.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query {
              Categories {
                PageTitle
                PageSubtitle
                Listings {
                  BrandName
                  Description
                  ImageUrl
                  ProductName
                  ProductType
                  Rank
                  Rating
                  productId
                }
              }
            }`
        }
      });
      console.log(response);
      setCategory(response.data.data.Categories[0]);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAppSyncCategory();
    //fetchHasuraCategory();
  }, []);

  return (
    <div className="App">
      {category
        ? <CategoryView {...category} />
        : <h1>Failed to load category. Please see console.</h1>
      }
    </div>
  );
}

export default App;
