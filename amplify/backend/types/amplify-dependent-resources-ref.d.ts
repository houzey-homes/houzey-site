export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "houzeysite": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "homeownersGroupRole": "string",
            "contractorsGroupRole": "string"
        }
    },
    "api": {
        "houzeysite": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3houzeysitestorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}