export type AmplifyDependentResourcesAttributes = {
  "api": {
    "houzeysite": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "houzeysite": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "contractorsGroupRole": "string",
      "homeownersGroupRole": "string"
    }
  },
  "storage": {
    "s3houzeysitestorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}