/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTagInput = {
  name: string,
  color: string,
  id?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
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

export type Tag = {
  __typename: "Tag",
  name: string,
  color: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTagInput = {
  name?: string | null,
  color?: string | null,
  id: string,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateReferralUrlInput = {
  url: string,
  merchant: Merchant,
  id?: string | null,
};

export enum Merchant {
  Unknown = "Unknown",
  Amazon = "Amazon",
}


export type ModelReferralUrlConditionInput = {
  url?: ModelStringInput | null,
  merchant?: ModelMerchantInput | null,
  and?: Array< ModelReferralUrlConditionInput | null > | null,
  or?: Array< ModelReferralUrlConditionInput | null > | null,
  not?: ModelReferralUrlConditionInput | null,
};

export type ModelMerchantInput = {
  eq?: Merchant | null,
  ne?: Merchant | null,
};

export type ReferralUrl = {
  __typename: "ReferralUrl",
  url: string,
  merchant: Merchant,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReferralUrlInput = {
  url?: string | null,
  merchant?: Merchant | null,
  id: string,
};

export type DeleteReferralUrlInput = {
  id: string,
};

export type ModelTagFilterInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelReferralUrlFilterInput = {
  url?: ModelStringInput | null,
  merchant?: ModelMerchantInput | null,
  and?: Array< ModelReferralUrlFilterInput | null > | null,
  or?: Array< ModelReferralUrlFilterInput | null > | null,
  not?: ModelReferralUrlFilterInput | null,
};

export type ModelReferralUrlConnection = {
  __typename: "ModelReferralUrlConnection",
  items:  Array<ReferralUrl | null >,
  nextToken?: string | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReferralUrlMutationVariables = {
  input: CreateReferralUrlInput,
  condition?: ModelReferralUrlConditionInput | null,
};

export type CreateReferralUrlMutation = {
  createReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReferralUrlMutationVariables = {
  input: UpdateReferralUrlInput,
  condition?: ModelReferralUrlConditionInput | null,
};

export type UpdateReferralUrlMutation = {
  updateReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReferralUrlMutationVariables = {
  input: DeleteReferralUrlInput,
  condition?: ModelReferralUrlConditionInput | null,
};

export type DeleteReferralUrlMutation = {
  deleteReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      name: string,
      color: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReferralUrlQueryVariables = {
  id: string,
};

export type GetReferralUrlQuery = {
  getReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReferralUrlsQueryVariables = {
  filter?: ModelReferralUrlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReferralUrlsQuery = {
  listReferralUrls?:  {
    __typename: "ModelReferralUrlConnection",
    items:  Array< {
      __typename: "ReferralUrl",
      url: string,
      merchant: Merchant,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    name: string,
    color: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReferralUrlSubscription = {
  onCreateReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReferralUrlSubscription = {
  onUpdateReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReferralUrlSubscription = {
  onDeleteReferralUrl?:  {
    __typename: "ReferralUrl",
    url: string,
    merchant: Merchant,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
