let body = JSON.parse($response.body); 

smsContent = "联系您的寿险规划师、重疾风险管理师、独立理财顾问，请点击 https://la.sb/ywk";
body = JSON.stringify(body);
$done({body});
