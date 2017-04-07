/**
 * Created by Jeff on 2016/11/19.
 */


//创建XHR对象
function createXHR() {
    if (window.XMLHttpRequest) { //IE7+, FF, 谷歌...
        return new XMLHttpRequest();
    }
    //IE6-
    return new ActiveXObject("Microsoft.XMLHTTP");
}


/*
 obj ={
 method: "get",
 url: "http://localhost:8080/ajax/checkname",
 data: {

 },
 async: true
 }
 */
//封装的ajax函数
//obj: 是包含了请求方法, url, 是否是异步,...
function ajax(obj){

    //1, 创建xhr对象
    var xhr = createXHR();

    //2, open()
    //把参数对象: {regname:lisi, age: 33} 转换成参数字符串: regname=lisi&age=33
    obj.data = params(obj.data);

    //如果是get请求方式, 则把参数添加到url后面
    if (/get/i.test(obj.method)) {
        //obj.data.length > 0说明有参数
        obj.url += obj.data.length > 0 ? ("?"+obj.data) : "";
    }
    //调用open()方法
    xhr.open(obj.method, obj.url, obj.async);

    //3, send()
    if (/get/i.test(obj.method)) { //get请求方式
        xhr.send(null);
    }
    else {  //post请求方式
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(obj.data);
    }

    //4, onreadystatechange
    if (obj.async) { //异步
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                callback();
            }
        }
    }
    else { //同步
        callback();
    }

    //回调
    function callback() {
        if (xhr.status == 200) { //请求成功
            //console.log("请求成功!");

            //回调success函数
            obj.success(xhr.responseText);
        }
        else { //请求失败
            //console.log("请求失败!");

            //回调failure函数
            obj.failure(xhr.status);
        }
    }

}

/*
 把参数对象: {regname:lisi, age: 33} 转换成参数字符串: regname=lisi&age=33
 * */
function params(dataObj) {
    var arr = [];
    for (var i in dataObj) {
        var str = i + "=" + dataObj[i]; //regname=lisi
        arr.push(str);
    }
    //arr = [regname=lisi, age=33]
    return arr.join("&");
}


