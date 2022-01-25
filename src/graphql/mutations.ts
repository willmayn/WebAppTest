/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      name
      color
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      name
      color
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      name
      color
      id
      createdAt
      updatedAt
    }
  }
`;
export const createReferralUrl = /* GraphQL */ `
  mutation CreateReferralUrl(
    $input: CreateReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    createReferralUrl(input: $input, condition: $condition) {
      url
      merchant
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateReferralUrl = /* GraphQL */ `
  mutation UpdateReferralUrl(
    $input: UpdateReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    updateReferralUrl(input: $input, condition: $condition) {
      url
      merchant
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteReferralUrl = /* GraphQL */ `
  mutation DeleteReferralUrl(
    $input: DeleteReferralUrlInput!
    $condition: ModelReferralUrlConditionInput
  ) {
    deleteReferralUrl(input: $input, condition: $condition) {
      url
      merchant
      id
      createdAt
      updatedAt
    }
  }
`;
