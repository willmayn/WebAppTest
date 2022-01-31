import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { getCategoryPage } from './graphql/queries';
import CategoryView from './components/CategoryView';
import { CategoryPage, GetCategoryPageQuery, GetCategoryPageQueryVariables } from './API';

function App() {

  const [category, setCategory] = useState<CategoryPage | undefined>(undefined);

  async function fetchCategory() {
    try {
      const args : GetCategoryPageQueryVariables = {
        ProductType: "Sample"
      };
      const response = await API.graphql({ 
        query: getCategoryPage,
        variables: args
      }) as { data: GetCategoryPageQuery };
      console.log(response);
      if (response.data.getCategoryPage)
      {
        setCategory(response.data.getCategoryPage);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategory();
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
