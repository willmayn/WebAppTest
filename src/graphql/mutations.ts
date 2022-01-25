/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategoryPage = /* GraphQL */ `
  mutation CreateCategoryPage(
    $input: CreateCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    createCategoryPage(input: $input, condition: $condition) {
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
export const updateCategoryPage = /* GraphQL */ `
  mutation UpdateCategoryPage(
    $input: UpdateCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    updateCategoryPage(input: $input, condition: $condition) {
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
export const deleteCategoryPage = /* GraphQL */ `
  mutation DeleteCategoryPage(
    $input: DeleteCategoryPageInput!
    $condition: ModelCategoryPageConditionInput
  ) {
    deleteCategoryPage(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const createReferralUrl = /* GraphQL */ `
  mutation CreateReferralUrl(
    $input: CreateReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    createReferralUrl(input: $input, condition: $condition) {
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
export const updateReferralUrl = /* GraphQL */ `
  mutation UpdateReferralUrl(
    $input: UpdateReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    updateReferralUrl(input: $input, condition: $condition) {
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
export const deleteReferralUrl = /* GraphQL */ `
  mutation DeleteReferralUrl(
    $input: DeleteReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    deleteReferralUrl(input: $input, condition: $condition) {
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
