/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategoryPage = /* GraphQL */ `
  query GetCategoryPage($ProductType: String!) {
    getCategoryPage(ProductType: $ProductType) {
      id
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
          categoryPage {
            id
            ProductType
            Categories
            Listings {
              nextToken
            }
            PageTitle
            PageSubtitle
            createdAt
            updatedAt
          }
          Rank
          Tags {
            items {
              Label
              Color
              id
              createdAt
              updatedAt
              productListingTagsId
            }
            nextToken
          }
          ReferralUrl {
            items {
              Url
              id
              createdAt
              updatedAt
              productListingReferralUrlId
            }
            nextToken
          }
          createdAt
          updatedAt
          categoryPageListingsId
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
        id
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
            categoryPage {
              id
              ProductType
              Categories
              PageTitle
              PageSubtitle
              createdAt
              updatedAt
            }
            Rank
            Tags {
              nextToken
            }
            ReferralUrl {
              nextToken
            }
            createdAt
            updatedAt
            categoryPageListingsId
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
      categoryPage {
        id
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
            categoryPage {
              id
              ProductType
              Categories
              PageTitle
              PageSubtitle
              createdAt
              updatedAt
            }
            Rank
            Tags {
              nextToken
            }
            ReferralUrl {
              nextToken
            }
            createdAt
            updatedAt
            categoryPageListingsId
          }
          nextToken
        }
        PageTitle
        PageSubtitle
        createdAt
        updatedAt
      }
      Rank
      Tags {
        items {
          Label
          Color
          id
          createdAt
          updatedAt
          productListingTagsId
        }
        nextToken
      }
      ReferralUrl {
        items {
          Url
          Listing {
            productId
            ProductName
            ProductType
            BrandName
            Rating
            Description
            ImageUrl
            Categories
            categoryPage {
              id
              ProductType
              Categories
              PageTitle
              PageSubtitle
              createdAt
              updatedAt
            }
            Rank
            Tags {
              nextToken
            }
            ReferralUrl {
              nextToken
            }
            createdAt
            updatedAt
            categoryPageListingsId
          }
          id
          createdAt
          updatedAt
          productListingReferralUrlId
        }
        nextToken
      }
      createdAt
      updatedAt
      categoryPageListingsId
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
        categoryPage {
          id
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
              categoryPageListingsId
            }
            nextToken
          }
          PageTitle
          PageSubtitle
          createdAt
          updatedAt
        }
        Rank
        Tags {
          items {
            Label
            Color
            id
            createdAt
            updatedAt
            productListingTagsId
          }
          nextToken
        }
        ReferralUrl {
          items {
            Url
            Listing {
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
              categoryPageListingsId
            }
            id
            createdAt
            updatedAt
            productListingReferralUrlId
          }
          nextToken
        }
        createdAt
        updatedAt
        categoryPageListingsId
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Label
        Color
        id
        createdAt
        updatedAt
        productListingTagsId
      }
      nextToken
    }
  }
`;
export const getReferralUrl = /* GraphQL */ `
  query GetReferralUrl($id: ID!) {
    getReferralUrl(id: $id) {
      Url
      Listing {
        productId
        ProductName
        ProductType
        BrandName
        Rating
        Description
        ImageUrl
        Categories
        categoryPage {
          id
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
              categoryPageListingsId
            }
            nextToken
          }
          PageTitle
          PageSubtitle
          createdAt
          updatedAt
        }
        Rank
        Tags {
          items {
            Label
            Color
            id
            createdAt
            updatedAt
            productListingTagsId
          }
          nextToken
        }
        ReferralUrl {
          items {
            Url
            Listing {
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
              categoryPageListingsId
            }
            id
            createdAt
            updatedAt
            productListingReferralUrlId
          }
          nextToken
        }
        createdAt
        updatedAt
        categoryPageListingsId
      }
      id
      createdAt
      updatedAt
      productListingReferralUrlId
    }
  }
`;
export const listReferralUrls = /* GraphQL */ `
  query ListReferralUrls(
    $filter: ModelReferralUrlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferralUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Url
        Listing {
          productId
          ProductName
          ProductType
          BrandName
          Rating
          Description
          ImageUrl
          Categories
          categoryPage {
            id
            ProductType
            Categories
            Listings {
              nextToken
            }
            PageTitle
            PageSubtitle
            createdAt
            updatedAt
          }
          Rank
          Tags {
            items {
              Label
              Color
              id
              createdAt
              updatedAt
              productListingTagsId
            }
            nextToken
          }
          ReferralUrl {
            items {
              Url
              id
              createdAt
              updatedAt
              productListingReferralUrlId
            }
            nextToken
          }
          createdAt
          updatedAt
          categoryPageListingsId
        }
        id
        createdAt
        updatedAt
        productListingReferralUrlId
      }
      nextToken
    }
  }
`;
