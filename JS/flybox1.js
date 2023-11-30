let body = JSON.parse($request.body); 
body.data.data.UOM_CAOKY_ZHIZQZSQ[0].ZHENGCFXSJ = '105';
body = JSON.stringify(body);
$done({body});
