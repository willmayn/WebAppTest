/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      name
      color
      id
      createdAt
      updatedAt
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
        name
        color
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReferralUrl = /* GraphQL */ `
  query GetReferralUrl($id: ID!) {
    getReferralUrl(id: $id) {
      url
      merchant
      id
      createdAt
      updatedAt
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
        url
        merchant
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
