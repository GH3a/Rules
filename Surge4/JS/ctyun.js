/*
分享地址：https://t.me/
https://.*.com//services
hostname=www.ctyun.cn
*/

body = $response.body.replace("pValue":"5", "pValue":"20").replace("pass":"false", "pass":"true")
$done({body});
