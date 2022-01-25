/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategoryPage = /* GraphQL */ `
  subscription OnCreateCategoryPage {
    onCreateCategoryPage {
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
export const onUpdateCategoryPage = /* GraphQL */ `
  subscription OnUpdateCategoryPage {
    onUpdateCategoryPage {
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
export const onDeleteCategoryPage = /* GraphQL */ `
  subscription OnDeleteCategoryPage {
    onDeleteCategoryPage {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      Label
      Color
      id
      createdAt
      updatedAt
      productListingTagsId
    }
  }
`;
export const onCreateReferralUrl = /* GraphQL */ `
  subscription OnCreateReferralUrl {
    onCreateReferralUrl {
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
export const onUpdateReferralUrl = /* GraphQL */ `
  subscription OnUpdateReferralUrl {
    onUpdateReferralUrl {
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
export const onDeleteReferralUrl = /* GraphQL */ `
  subscription OnDeleteReferralUrl {
    onDeleteReferralUrl {
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
