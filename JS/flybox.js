let body = JSON.parse($request.body); 
body.model.data.UOM_CAOKY_ZHIZQZSQ[0].JIESSJ = '105';
body = JSON.stringify(body);
$done({body});
