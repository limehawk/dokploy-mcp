# Application | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-application

---

[Dokploy](https://dokploy.com)
# Application
https://your-dokploy-instance.com/apiPOST
```
```
/
```
application.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
name*stringLength
```
1 <= length
```
appName?stringdescription?string|nullenvironmentId*stringserverId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"environmentId": "string"
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
application.one
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
curl -X GET "https://your-dokploy-instance.com/api/application.one?applicationId=string" \
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
application.reload
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appName*stringapplicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.reload" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appName": "string",
"applicationId": "string"
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
application.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.stop
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.stop" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.start
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.start" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.redeploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringLength
```
1 <= length
```
title?stringdescription?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.redeploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.saveEnvironment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringenv?string|nullbuildArgs?string|nullbuildSecrets?string|nullcreateEnvFile*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveEnvironment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"createEnvFile": true
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
application.saveBuildType
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringbuildType*stringValue in
```
"dockerfile" | "heroku_buildpacks" | "paketo_buildpacks" | "nixpacks" | "static" | "railpack"
```
dockerfile?string|nulldockerContextPath*string|nulldockerBuildStage*string|nullherokuVersion?string|nullrailpackVersion?string|nullpublishDirectory?string|nullisStaticSpa?boolean|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveBuildType" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"buildType": "dockerfile",
"dockerContextPath": "string",
"dockerBuildStage": "string"
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
application.saveGithubProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringrepository?string|nullbranch?string|nullowner*string|nullbuildPath?string|nullgithubId*string|nullwatchPaths?array|nullenableSubmodules*booleantriggerType?stringDefault
```
"push"
```
Value in
```
"push" | "tag"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveGithubProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"owner": "string",
"githubId": "string",
"enableSubmodules": true
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
application.saveGitlabProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringgitlabBranch*string|nullgitlabBuildPath*string|nullgitlabOwner*string|nullgitlabRepository*string|nullgitlabId*string|nullgitlabProjectId*number|nullgitlabPathNamespace*string|nullwatchPaths?array|nullenableSubmodules*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveGitlabProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"gitlabBranch": "string",
"gitlabBuildPath": "string",
"gitlabOwner": "string",
"gitlabRepository": "string",
"gitlabId": "string",
"gitlabProjectId": 0,
"gitlabPathNamespace": "string",
"enableSubmodules": true
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
application.saveBitbucketProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
bitbucketBranch*string|nullbitbucketBuildPath*string|nullbitbucketOwner*string|nullbitbucketRepository*string|nullbitbucketId*string|nullapplicationId*stringwatchPaths?array|nullenableSubmodules*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveBitbucketProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"bitbucketBranch": "string",
"bitbucketBuildPath": "string",
"bitbucketOwner": "string",
"bitbucketRepository": "string",
"bitbucketId": "string",
"applicationId": "string",
"enableSubmodules": true
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
application.saveGiteaProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringgiteaBranch*string|nullgiteaBuildPath*string|nullgiteaOwner*string|nullgiteaRepository*string|nullgiteaId*string|nullwatchPaths?array|nullenableSubmodules*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveGiteaProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"giteaBranch": "string",
"giteaBuildPath": "string",
"giteaOwner": "string",
"giteaRepository": "string",
"giteaId": "string",
"enableSubmodules": true
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
application.saveDockerProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
dockerImage?string|nullapplicationId*stringusername?string|nullpassword?string|nullregistryUrl?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveDockerProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.saveGitProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
customGitBranch?string|nullapplicationId*stringcustomGitBuildPath?string|nullcustomGitUrl?string|nullwatchPaths?array|nullenableSubmodules*booleancustomGitSSHKeyId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.saveGitProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"enableSubmodules": true
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
application.disconnectGitProvider
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.disconnectGitProvider" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.markRunning
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.markRunning" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringLength
```
1 <= length
```
name?stringLength
```
1 <= length
```
appName?stringdescription?string|nullenv?string|nullpreviewEnv?string|nullwatchPaths?array|nullpreviewBuildArgs?string|nullpreviewBuildSecrets?string|nullpreviewLabels?array|nullpreviewWildcard?string|nullpreviewPort?number|nullpreviewHttps?booleanpreviewPath?string|nullpreviewCertificateType?stringValue in
```
"letsencrypt" | "none" | "custom"
```
previewCustomCertResolver?string|nullpreviewLimit?number|nullisPreviewDeploymentsActive?boolean|nullpreviewRequireCollaboratorPermissions?boolean|nullrollbackActive?boolean|nullbuildArgs?string|nullbuildSecrets?string|nullmemoryReservation?string|nullmemoryLimit?string|nullcpuReservation?string|nullcpuLimit?string|nulltitle?string|nullenabled?boolean|nullsubtitle?string|nullcommand?string|nullargs?array|nullrefreshToken?string|nullsourceType?stringValue in
```
"github" | "docker" | "git" | "gitlab" | "bitbucket" | "gitea" | "drop"
```
cleanCache?boolean|nullrepository?string|nullowner?string|nullbranch?string|nullbuildPath?string|nulltriggerType?string|nullValue in
```
"push" | "tag"
```
autoDeploy?boolean|nullgitlabProjectId?number|nullgitlabRepository?string|nullgitlabOwner?string|nullgitlabBranch?string|nullgitlabBuildPath?string|nullgitlabPathNamespace?string|nullgiteaRepository?string|nullgiteaOwner?string|nullgiteaBranch?string|nullgiteaBuildPath?string|nullbitbucketRepository?string|nullbitbucketOwner?string|nullbitbucketBranch?string|nullbitbucketBuildPath?string|nullusername?string|nullpassword?string|nulldockerImage?string|nullregistryUrl?string|nullcustomGitUrl?string|nullcustomGitBranch?string|nullcustomGitBuildPath?string|nullcustomGitSSHKeyId?string|nullenableSubmodules?booleandockerfile?string|nulldockerContextPath?string|nulldockerBuildStage?string|nulldropBuildPath?string|nullhealthCheckSwarm?object|nullrestartPolicySwarm?object|nullplacementSwarm?object|nullupdateConfigSwarm?object|nullrollbackConfigSwarm?object|nullmodeSwarm?object|nulllabelsSwarm?object|nullnetworkSwarm?array|nullstopGracePeriodSwarm?integer|nullendpointSpecSwarm?object|nullreplicas?numberapplicationStatus?stringValue in
```
"idle" | "running" | "done" | "error"
```
buildType?stringValue in
```
"dockerfile" | "heroku_buildpacks" | "paketo_buildpacks" | "nixpacks" | "static" | "railpack"
```
railpackVersion?string|nullherokuVersion?string|nullpublishDirectory?string|nullisStaticSpa?boolean|nullcreateEnvFile?booleancreatedAt?stringregistryId?string|nullrollbackRegistryId?string|nullenvironmentId?stringgithubId?string|nullgitlabId?string|nullgiteaId?string|nullbitbucketId?string|nullbuildServerId?string|nullbuildRegistryId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.refreshToken
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.refreshToken" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.deploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringLength
```
1 <= length
```
title?stringdescription?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.deploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.cleanQueues
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.cleanQueues" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.killBuild
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.killBuild" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
application.readTraefikConfig
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
curl -X GET "https://your-dokploy-instance.com/api/application.readTraefikConfig?applicationId=string" \
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
application.updateTraefikConfig
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringtraefikConfig*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.updateTraefikConfig" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"traefikConfig": "string"
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
application.readAppMonitoring
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
appName*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/application.readAppMonitoring?appName=string" \
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
application.move
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*stringtargetEnvironmentId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.move" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string",
"targetEnvironmentId": "string"
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
application.cancelDeployment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
applicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/application.cancelDeployment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"applicationId": "string"
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
[AiPrevious Page](/docs/api/reference-ai)[BackupNext Page](/docs/api/reference-backup)