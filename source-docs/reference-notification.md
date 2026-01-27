# Notification | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-notification

---

[Dokploy](https://dokploy.com)
# Notification
https://your-dokploy-instance.com/apiPOST
```
```
/
```
notification.createSlack
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverThreshold*booleanwebhookUrl*stringLength
```
1 <= length
```
channel*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createSlack" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverThreshold": true,
"webhookUrl": "string",
"channel": "string"
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
notification.updateSlack
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverThreshold?booleanwebhookUrl?stringLength
```
1 <= length
```
channel?stringnotificationId*stringLength
```
1 <= length
```
slackId*stringorganizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateSlack" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"slackId": "string"
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
notification.testSlackConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
webhookUrl*stringLength
```
1 <= length
```
channel*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testSlackConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"webhookUrl": "string",
"channel": "string"
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
notification.createTelegram
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverThreshold*booleanbotToken*stringLength
```
1 <= length
```
chatId*stringLength
```
1 <= length
```
messageThreadId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createTelegram" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverThreshold": true,
"botToken": "string",
"chatId": "string",
"messageThreadId": "string"
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
notification.updateTelegram
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverThreshold?booleanbotToken?stringLength
```
1 <= length
```
chatId?stringLength
```
1 <= length
```
messageThreadId?stringnotificationId*stringLength
```
1 <= length
```
telegramId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateTelegram" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"telegramId": "string"
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
notification.testTelegramConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
botToken*stringLength
```
1 <= length
```
chatId*stringLength
```
1 <= length
```
messageThreadId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testTelegramConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"botToken": "string",
"chatId": "string",
"messageThreadId": "string"
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
notification.createDiscord
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverThreshold*booleanwebhookUrl*stringLength
```
1 <= length
```
decoration*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createDiscord" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverThreshold": true,
"webhookUrl": "string",
"decoration": true
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
notification.updateDiscord
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverThreshold?booleanwebhookUrl?stringLength
```
1 <= length
```
decoration?booleannotificationId*stringLength
```
1 <= length
```
discordId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateDiscord" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"discordId": "string"
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
notification.testDiscordConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
webhookUrl*stringLength
```
1 <= length
```
decoration?boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testDiscordConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"webhookUrl": "string"
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
notification.createEmail
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverThreshold*booleansmtpServer*stringLength
```
1 <= length
```
smtpPort*numberRange
```
1 <= value
```
username*stringLength
```
1 <= length
```
password*stringLength
```
1 <= length
```
fromAddress*stringLength
```
1 <= length
```
toAddresses*array<string>Items
```
1 <= items
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createEmail" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverThreshold": true,
"smtpServer": "string",
"smtpPort": 1,
"username": "string",
"password": "string",
"fromAddress": "string",
"toAddresses": [
"string"
]
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
notification.updateEmail
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverThreshold?booleansmtpServer?stringLength
```
1 <= length
```
smtpPort?numberRange
```
1 <= value
```
username?stringLength
```
1 <= length
```
password?stringLength
```
1 <= length
```
fromAddress?stringLength
```
1 <= length
```
toAddresses?array<string>Items
```
1 <= items
```
notificationId*stringLength
```
1 <= length
```
emailId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateEmail" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"emailId": "string"
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
notification.testEmailConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
smtpServer*stringLength
```
1 <= length
```
smtpPort*numberRange
```
1 <= value
```
username*stringLength
```
1 <= length
```
password*stringLength
```
1 <= length
```
toAddresses*array<string>Items
```
1 <= items
```
fromAddress*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testEmailConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"smtpServer": "string",
"smtpPort": 1,
"username": "string",
"password": "string",
"toAddresses": [
"string"
],
"fromAddress": "string"
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
notification.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
notificationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string"
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
notification.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
notificationId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/notification.one?notificationId=string" \
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
notification.all
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
curl -X GET "https://your-dokploy-instance.com/api/notification.all" \
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
notification.receiveNotification
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
ServerType?stringDefault
```
"Dokploy"
```
Value in
```
"Dokploy" | "Remote"
```
Type*stringValue in
```
"Memory" | "CPU"
```
Value*numberThreshold*numberMessage*stringTimestamp*stringToken*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.receiveNotification" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"Type": "Memory",
"Value": 0,
"Threshold": 0,
"Message": "string",
"Timestamp": "string",
"Token": "string"
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
notification.createGotify
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverUrl*stringLength
```
1 <= length
```
appToken*stringLength
```
1 <= length
```
priority*numberRange
```
1 <= value
```
decoration*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createGotify" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverUrl": "string",
"appToken": "string",
"priority": 1,
"decoration": true
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
notification.updateGotify
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverUrl?stringLength
```
1 <= length
```
appToken?stringLength
```
1 <= length
```
priority?numberRange
```
1 <= value
```
decoration?booleannotificationId*stringLength
```
1 <= length
```
gotifyId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateGotify" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"gotifyId": "string"
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
notification.testGotifyConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
serverUrl*stringLength
```
1 <= length
```
appToken*stringLength
```
1 <= length
```
priority*numberRange
```
1 <= value
```
decoration?boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testGotifyConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"serverUrl": "string",
"appToken": "string",
"priority": 1
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
notification.createNtfy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverUrl*stringLength
```
1 <= length
```
topic*stringLength
```
1 <= length
```
accessToken*stringpriority*numberRange
```
1 <= value
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createNtfy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverUrl": "string",
"topic": "string",
"accessToken": "string",
"priority": 1
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
notification.updateNtfy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverUrl?stringLength
```
1 <= length
```
topic?stringLength
```
1 <= length
```
accessToken?stringpriority?numberRange
```
1 <= value
```
notificationId*stringLength
```
1 <= length
```
ntfyId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateNtfy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"ntfyId": "string"
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
notification.testNtfyConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
serverUrl*stringLength
```
1 <= length
```
topic*stringLength
```
1 <= length
```
accessToken*stringpriority*numberRange
```
1 <= value
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testNtfyConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"serverUrl": "string",
"topic": "string",
"accessToken": "string",
"priority": 1
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
notification.createLark
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError*booleandatabaseBackup*booleanvolumeBackup*booleandokployRestart*booleanname*stringappDeploy*booleandockerCleanup*booleanserverThreshold*booleanwebhookUrl*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.createLark" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"appBuildError": true,
"databaseBackup": true,
"volumeBackup": true,
"dokployRestart": true,
"name": "string",
"appDeploy": true,
"dockerCleanup": true,
"serverThreshold": true,
"webhookUrl": "string"
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
notification.updateLark
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
appBuildError?booleandatabaseBackup?booleanvolumeBackup?booleandokployRestart?booleanname?stringappDeploy?booleandockerCleanup?booleanserverThreshold?booleanwebhookUrl?stringLength
```
1 <= length
```
notificationId*stringLength
```
1 <= length
```
larkId*stringLength
```
1 <= length
```
organizationId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.updateLark" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"notificationId": "string",
"larkId": "string"
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
notification.testLarkConnection
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
webhookUrl*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/notification.testLarkConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"webhookUrl": "string"
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
notification.getEmailProviders
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
curl -X GET "https://your-dokploy-instance.com/api/notification.getEmailProviders" \
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
[MysqlPrevious Page](/docs/api/reference-mysql)[OrganizationNext Page](/docs/api/reference-organization)