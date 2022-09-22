let body = JSON.parse($request.body); 
body.smsContent = "亲爱的梁祖城父母，在您孩子梁祖城小朋友生日之际，祝他快乐成长，生日快乐！作为父母可以在生日当天给孩子一份爱的保障，让生日意义非凡，请联系您的专属寿险规划师、重疾风险管理师、独立理财顾问，请点击 https://la.sb/ywk";
body = JSON.stringify(body);
$done({body});
