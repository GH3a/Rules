let body = JSON.parse($request.body); 
for (i in body.action.model.data.data.UOM_CAOKY_ZHIZQZSQ) {
  body.action.model.data.data.UOM_CAOKY_ZHIZQZSQ[i].ZHENGCFXSJ = '105';
}
body = JSON.stringify(body);
$done({body});
