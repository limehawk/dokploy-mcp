# Domain | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-domain

---

[Dokploy](https://dokploy.com)
# Domain
https://your-dokploy-instance.com/apiPOST
```
```
/
```
domain.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
host*stringLength
```
1 <= length
```
path?string|nullLength
```
1 <= length
```
port?number|nullRange
```
1 <= value <= 65535
```
https?booleanapplicationId?string|nullcertificateType?stringValue in
```
"letsencrypt" | "none" | "custom"
```
customCertResolver?string|nullcomposeId?string|nullserviceName?string|nulldomainType?string|nullValue in
```
"compose" | "application" | "preview"
```
previewDeploymentId?string|nullinternalPath?string|nullstripPath?boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/domain.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"host": "string"
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
domain.byApplicationId
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
applicationId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/domain.byApplicationId?applicationId=string" \
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
domain.byComposeId
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
composeId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/domain.byComposeId?composeId=string" \
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
domain.generateDomain
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appName*stringserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/domain.generateDomain" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appName": "string"
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
domain.canGenerateTraefikMeDomains
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
serverId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/domain.canGenerateTraefikMeDomains?serverId=string" \
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
domain.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
host*stringLength
```
1 <= length
```
path?string|nullLength
```
1 <= length
```
port?number|nullRange
```
1 <= value <= 65535
```
https?booleancertificateType?stringValue in
```
"letsencrypt" | "none" | "custom"
```
customCertResolver?string|nullserviceName?string|nulldomainType?string|nullValue in
```
"compose" | "application" | "preview"
```
internalPath?string|nullstripPath?booleandomainId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/domain.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"host": "string",
"domainId": "string"
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
domain.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
domainId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/domain.one?domainId=string" \
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
domain.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
domainId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/domain.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"domainId": "string"
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
domain.validateDomain
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
domain*stringserverIp?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/domain.validateDomain" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"domain": "string"
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
[DockerPrevious Page](/docs/api/reference-docker)[EnvironmentNext Page](/docs/api/reference-environment)