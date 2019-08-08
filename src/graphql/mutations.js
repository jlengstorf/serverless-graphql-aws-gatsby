/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConference = `mutation CreateConference($input: CreateConferenceInput!) {
  createConference(input: $input) {
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
export const updateConference = `mutation UpdateConference($input: UpdateConferenceInput!) {
  updateConference(input: $input) {
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
export const deleteConference = `mutation DeleteConference($input: DeleteConferenceInput!) {
  deleteConference(input: $input) {
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
