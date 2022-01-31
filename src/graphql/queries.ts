/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategoryPage = /* GraphQL */ `
  query GetCategoryPage($ProductType: String!) {
    getCategoryPage(ProductType: $ProductType) {
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
export const listCategoryPages = /* GraphQL */ `
  query ListCategoryPages(
    $ProductType: String
    $filter: ModelCategoryPageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategoryPages(
      ProductType: $ProductType
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProductListing = /* GraphQL */ `
  query GetProductListing($productId: ID!) {
    getProductListing(productId: $productId) {
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
export const listProductListings = /* GraphQL */ `
  query ListProductListings(
    $productId: ID
    $filter: ModelProductListingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProductListings(
      productId: $productId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
