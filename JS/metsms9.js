let body = JSON.parse($request.body); 
body.smsContent = "亲爱的家庭支柱蒋豪先生，您的爱人官大芬，即将生日，在这提前预祝生日快乐，作为一家之主，您可以在生日当天给太太建立一份爱的保障，让生日意义非凡，十年之后，当她收到您存的养老金，那就是爱！请联系您的专属寿险规划师、重疾风险管理师、独立理财顾问，请点击 https://la.sb/ywk";
body = JSON.stringify(body);
$done({body});
