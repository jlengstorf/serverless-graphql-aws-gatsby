/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConference = `query GetConference($id: ID!) {
  getConference(id: $id) {
    id
    name
    description
    location {
      lat
      lon
    }
    weather
  }
}
`;
export const listConferences = `query ListConferences(
  $filter: ModelConferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listConferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      location {
        lat
        lon
      }
      weather
    }
    nextToken
  }
}
`;
