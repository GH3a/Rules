let body = JSON.parse($request.body); 
for (i in body.data.data.UOM_CAOKY_ZHIZQZSQ) {
  body.data.data.UOM_CAOKY_ZHIZQZSQ[i].ZHENGCFXSJ_DMZ = '105';
}
body = JSON.stringify(body);
$done({body});
