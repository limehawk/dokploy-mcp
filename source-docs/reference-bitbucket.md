# Bitbucket | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-bitbucket

---

[Dokploy](https://dokploy.com)
# Bitbucket
https://your-dokploy-instance.com/apiPOST
```
```
/
```
bitbucket.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
bitbucketId?stringbitbucketUsername?stringbitbucketEmail?stringFormat
```
email
```
appPassword?stringapiToken?stringbitbucketWorkspaceName?stringgitProviderId?stringauthId*stringLength
```
1 <= length
```
name*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/bitbucket.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"authId": "string",
"name": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
bitbucket.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
bitbucketId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/bitbucket.one?bitbucketId=string" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
bitbucket.bitbucketProviders
```
SendAuthorization
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/bitbucket.bitbucketProviders" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
bitbucket.getBitbucketRepositories
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
bitbucketId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/bitbucket.getBitbucketRepositories?bitbucketId=string" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
bitbucket.getBitbucketBranches
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
owner*stringrepo*stringbitbucketId?string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/bitbucket.getBitbucketBranches?owner=string&repo=string" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiPOST
```
```
/
```
bitbucket.testConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
bitbucketId*stringLength
```
1 <= length
```
bitbucketUsername?stringbitbucketEmail?stringFormat
```
email
```
workspaceName?stringapiToken?stringappPassword?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/bitbucket.testConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"bitbucketId": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiPOST
```
```
/
```
bitbucket.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
bitbucketId*stringLength
```
1 <= length
```
bitbucketUsername?stringbitbucketEmail?stringFormat
```
email
```
appPassword?stringapiToken?stringbitbucketWorkspaceName?stringgitProviderId*stringname*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/bitbucket.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"bitbucketId": "string",
"gitProviderId": "string",
"name": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
[BackupPrevious Page](/docs/api/reference-backup)[CertificatesNext Page](/docs/api/reference-certificates)