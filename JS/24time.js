function zeroFill(i){
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}

let date = new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
let month = zeroFill(date.getMonth() + 1);//月
let day = zeroFill(date.getDate());//日
let hour = zeroFill(date.getHours());//时
let minute = zeroFill(date.getMinutes());//分
let second = "00";
/*let second = zeroFill(date.getSeconds());//秒*/
let curTime = date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

let datetest = new Date(new Date().getTime() - 8 * 44 * 60 * 1000);
let monthtest = zeroFill(datetest.getMonth() + 1);//月
let daytest = zeroFill(datetest.getDate());//日
let hourtest = zeroFill(datetest.getHours());//时
let minutetest = zeroFill(datetest.getMinutes());//分
let secondtest = "44";
/*let second = zeroFill(datetest.getSeconds());//秒*/
let curTimetest = datetest.getFullYear() + "-" + monthtest + "-" + daytest + " " + hourtest + ":" + minutetest + ":" + secondtest;

let body = JSON.parse($response.body); 
let listdata = body.data.pageUtils.list;
for (i in listdata) {
  listdata[0].testCompleteTime = curTimetest;
  listdata[0].collectionTime = curTime;
}
body = JSON.stringify(body);
$done({body}); 
