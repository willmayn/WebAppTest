/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryPageInput = {
  ProductType: string,
  Categories: Array< string >,
  PageTitle: string,
  PageSubtitle: string,
};

export type ModelCategoryPageConditionInput = {
  Categories?: ModelStringInput | null,
  PageTitle?: ModelStringInput | null,
  PageSubtitle?: ModelStringInput | null,
  and?: Array< ModelCategoryPageConditionInput | null > | null,
  or?: Array< ModelCategoryPageConditionInput | null > | null,
  not?: ModelCategoryPageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CategoryPage = {
  __typename: "CategoryPage",
  ProductType: string,
  Categories: Array< string >,
  Listings?: ModelProductListingConnection | null,
  PageTitle: string,
  PageSubtitle: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductListingConnection = {
  __typename: "ModelProductListingConnection",
  items:  Array<ProductListing | null >,
  nextToken?: string | null,
};

export type ProductListing = {
  __typename: "ProductListing",
  productId: string,
  ProductName: string,
  ProductType: string,
  BrandName: string,
  Rating: number,
  Description: string,
  ImageUrl: string,
  Categories: Array< string >,
  Rank: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryPageInput = {
  ProductType: string,
  Categories?: Array< string > | null,
  PageTitle?: string | null,
  PageSubtitle?: string | null,
};

export type DeleteCategoryPageInput = {
  ProductType: string,
};

export type CreateProductListingInput = {
  productId: string,
  ProductName: string,
  ProductType: string,
  BrandName: string,
  Rating: number,
  Description: string,
  ImageUrl: string,
  Categories: Array< string >,
  Rank: number,
};

export type ModelProductListingConditionInput = {
  ProductName?: ModelStringInput | null,
  ProductType?: ModelStringInput | null,
  BrandName?: ModelStringInput | null,
  Rating?: ModelFloatInput | null,
  Description?: ModelStringInput | null,
  ImageUrl?: ModelStringInput | null,
  Categories?: ModelStringInput | null,
  Rank?: ModelIntInput | null,
  and?: Array< ModelProductListingConditionInput | null > | null,
  or?: Array< ModelProductListingConditionInput | null > | null,
  not?: ModelProductListingConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductListingInput = {
  productId: string,
  ProductName?: string | null,
  ProductType?: string | null,
  BrandName?: string | null,
  Rating?: number | null,
  Description?: string | null,
  ImageUrl?: string | null,
  Categories?: Array< string > | null,
  Rank?: number | null,
};

export type DeleteProductListingInput = {
  productId: string,
};

export type ModelCategoryPageFilterInput = {
  ProductType?: ModelStringInput | null,
  Categories?: ModelStringInput | null,
  PageTitle?: ModelStringInput | null,
  PageSubtitle?: ModelStringInput | null,
  and?: Array< ModelCategoryPageFilterInput | null > | null,
  or?: Array< ModelCategoryPageFilterInput | null > | null,
  not?: ModelCategoryPageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCategoryPageConnection = {
  __typename: "ModelCategoryPageConnection",
  items:  Array<CategoryPage | null >,
  nextToken?: string | null,
};

export type ModelProductListingFilterInput = {
  productId?: ModelIDInput | null,
  ProductName?: ModelStringInput | null,
  ProductType?: ModelStringInput | null,
  BrandName?: ModelStringInput | null,
  Rating?: ModelFloatInput | null,
  Description?: ModelStringInput | null,
  ImageUrl?: ModelStringInput | null,
  Categories?: ModelStringInput | null,
  Rank?: ModelIntInput | null,
  and?: Array< ModelProductListingFilterInput | null > | null,
  or?: Array< ModelProductListingFilterInput | null > | null,
  not?: ModelProductListingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCategoryPageMutationVariables = {
  input: CreateCategoryPageInput,
  condition?: ModelCategoryPageConditionInput | null,
};

export type CreateCategoryPageMutation = {
  createCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryPageMutationVariables = {
  input: UpdateCategoryPageInput,
  condition?: ModelCategoryPageConditionInput | null,
};

export type UpdateCategoryPageMutation = {
  updateCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryPageMutationVariables = {
  input: DeleteCategoryPageInput,
  condition?: ModelCategoryPageConditionInput | null,
};

export type DeleteCategoryPageMutation = {
  deleteCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductListingMutationVariables = {
  input: CreateProductListingInput,
  condition?: ModelProductListingConditionInput | null,
};

export type CreateProductListingMutation = {
  createProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductListingMutationVariables = {
  input: UpdateProductListingInput,
  condition?: ModelProductListingConditionInput | null,
};

export type UpdateProductListingMutation = {
  updateProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductListingMutationVariables = {
  input: DeleteProductListingInput,
  condition?: ModelProductListingConditionInput | null,
};

export type DeleteProductListingMutation = {
  deleteProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryPageQueryVariables = {
  ProductType: string,
};

export type GetCategoryPageQuery = {
  getCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoryPagesQueryVariables = {
  ProductType?: string | null,
  filter?: ModelCategoryPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoryPagesQuery = {
  listCategoryPages?:  {
    __typename: "ModelCategoryPageConnection",
    items:  Array< {
      __typename: "CategoryPage",
      ProductType: string,
      Categories: Array< string >,
      Listings?:  {
        __typename: "ModelProductListingConnection",
        items:  Array< {
          __typename: "ProductListing",
          productId: string,
          ProductName: string,
          ProductType: string,
          BrandName: string,
          Rating: number,
          Description: string,
          ImageUrl: string,
          Categories: Array< string >,
          Rank: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      PageTitle: string,
      PageSubtitle: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductListingQueryVariables = {
  productId: string,
};

export type GetProductListingQuery = {
  getProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductListingsQueryVariables = {
  productId?: string | null,
  filter?: ModelProductListingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductListingsQuery = {
  listProductListings?:  {
    __typename: "ModelProductListingConnection",
    items:  Array< {
      __typename: "ProductListing",
      productId: string,
      ProductName: string,
      ProductType: string,
      BrandName: string,
      Rating: number,
      Description: string,
      ImageUrl: string,
      Categories: Array< string >,
      Rank: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategoryPageSubscription = {
  onCreateCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategoryPageSubscription = {
  onUpdateCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategoryPageSubscription = {
  onDeleteCategoryPage?:  {
    __typename: "CategoryPage",
    ProductType: string,
    Categories: Array< string >,
    Listings?:  {
      __typename: "ModelProductListingConnection",
      items:  Array< {
        __typename: "ProductListing",
        productId: string,
        ProductName: string,
        ProductType: string,
        BrandName: string,
        Rating: number,
        Description: string,
        ImageUrl: string,
        Categories: Array< string >,
        Rank: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    PageTitle: string,
    PageSubtitle: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductListingSubscription = {
  onCreateProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductListingSubscription = {
  onUpdateProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductListingSubscription = {
  onDeleteProductListing?:  {
    __typename: "ProductListing",
    productId: string,
    ProductName: string,
    ProductType: string,
    BrandName: string,
    Rating: number,
    Description: string,
    ImageUrl: string,
    Categories: Array< string >,
    Rank: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
