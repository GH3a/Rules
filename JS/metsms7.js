let body = JSON.parse($request.body); 
body.smsContent = "亲爱的家庭支柱戴洪亮先生，为了您的家庭，您每天在认真工作辛苦赚钱，也同样是为了您的家庭，请您给自己配置一份保障。投保人士是付出爱的人；被保人是享受爱的人；受益人是继承爱的人；保险代理人是传递爱的人，让我们的爱更有意义！请联系您的专属寿险规划师、重疾风险管理师、独立理财顾问，请点击 https://la.sb/ywk";
body = JSON.stringify(body);
$done({body});
