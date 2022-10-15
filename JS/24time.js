let body = JSON.parse($response.body); 
let listdata = body.data.pageUtils.list;
for (i in listdata) {
  listdata[0].testCompleteTime = "2022-10-15 22:41:54";
  listdata[0].collectionTime = "2022-10-15 22:41:54";
}
body = JSON.stringify(body);
$done({body}); 
