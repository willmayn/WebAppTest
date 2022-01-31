/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategoryPage = /* GraphQL */ `
  mutation CreateCategoryPage(
    $input: CreateCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    createCategoryPage(input: $input, condition: $condition) {
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
export const updateCategoryPage = /* GraphQL */ `
  mutation UpdateCategoryPage(
    $input: UpdateCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    updateCategoryPage(input: $input, condition: $condition) {
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
export const deleteCategoryPage = /* GraphQL */ `
  mutation DeleteCategoryPage(
    $input: DeleteCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    deleteCategoryPage(input: $input, condition: $condition) {
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
export const createProductListing = /* GraphQL */ `
  mutation CreateProductListing(
    $input: CreateProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    createProductListing(input: $input, condition: $condition) {
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
export const updateProductListing = /* GraphQL */ `
  mutation UpdateProductListing(
    $input: UpdateProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    updateProductListing(input: $input, condition: $condition) {
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
export const deleteProductListing = /* GraphQL */ `
  mutation DeleteProductListing(
    $input: DeleteProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    deleteProductListing(input: $input, condition: $condition) {
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
