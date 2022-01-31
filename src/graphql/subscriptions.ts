/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategoryPage = /* GraphQL */ `
  subscription OnCreateCategoryPage {
    onCreateCategoryPage {
      ProductType
      Categories
      Listings {
        items {
          productId
          ProductName
          ProductType
          BrandName
          Rating
          Description
          ImageUrl
          Categories
          Rank
          createdAt
          updatedAt
        }
        nextToken
      }
      PageTitle
      PageSubtitle
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategoryPage = /* GraphQL */ `
  subscription OnUpdateCategoryPage {
    onUpdateCategoryPage {
      ProductType
      Categories
      Listings {
        items {
          productId
          ProductName
          ProductType
          BrandName
          Rating
          Description
          ImageUrl
          Categories
          Rank
          createdAt
          updatedAt
        }
        nextToken
      }
      PageTitle
      PageSubtitle
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategoryPage = /* GraphQL */ `
  subscription OnDeleteCategoryPage {
    onDeleteCategoryPage {
      ProductType
      Categories
      Listings {
        items {
          productId
          ProductName
          ProductType
          BrandName
          Rating
          Description
          ImageUrl
          Categories
          Rank
          createdAt
          updatedAt
        }
        nextToken
      }
      PageTitle
      PageSubtitle
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProductListing = /* GraphQL */ `
  subscription OnCreateProductListing {
    onCreateProductListing {
      productId
      ProductName
      ProductType
      BrandName
      Rating
      Description
      ImageUrl
      Categories
      Rank
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProductListing = /* GraphQL */ `
  subscription OnUpdateProductListing {
    onUpdateProductListing {
      productId
      ProductName
      ProductType
      BrandName
      Rating
      Description
      ImageUrl
      Categories
      Rank
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProductListing = /* GraphQL */ `
  subscription OnDeleteProductListing {
    onDeleteProductListing {
      productId
      ProductName
      ProductType
      BrandName
      Rating
      Description
      ImageUrl
      Categories
      Rank
      createdAt
      updatedAt
    }
  }
`;
