let body = JSON.parse($response.body); 
body.data.status = "ok";
body.data.expire = "2099-12-31T23:59:59+08:00";
/*body.data.fee_record = "2099-12-31T23:59:59+08:00";*/
body.data.type = "platinum";
body = JSON.stringify(body);
$done({body});
