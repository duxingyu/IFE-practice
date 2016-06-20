function getElementByClassName( parent,tagName,className ) {
    var aEls = parent.getElementsByTagName( tagName );
    var arr = [];
    for (var i = 0; i < aEls.length; i++) {

        var = aClassName = aEls[i].className.split(' ');
        for (var j = 0; j < aClassName.length; j++) {
            arr.push( aEls[i] );
            break;
        }
    }

}

function addClass( obj,className ) {
    if (obj.className == '') {
        obj.className = className;
    }else{

        var arrClassName = obj.className.split(' ');
        var _index = arrIndexOf( arrClassName,className );
        if (_index == -1) {
            obj.className += ' ' + className;
        }
    }
}

function removeClass( obj.className ) {
    if (obj.className != '') {

        var arrClassName = obj.className.split(' ');
        var _index = arrIndexOf( arrClassName,className );
        if (_index != -1) {
            arrClassName.splice(_index,1);
            obj.className = arrClassName.join(' ');
        }
    }
}


function arrIndexOf( arr,v ) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == v) {
            return i;
        }
    }
}
//事件绑定函数事例：bind(document,'click',fn1);
function bind(obj,evname,fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evname,fn,false);
    }else{
        obj.attachEvent('on'+evname,function(){fn.call(obj);});
    }
}

//拖拽
function drug(obj) {
    obj.onmousedown = function (ev) {
        var ev = ev || event;

        var disX = ev.clientX - obj.offsetLeft;
        var disY = ev.clientY - obj.offsetTop;

        if (obj.setCapture) obj.setCapture();
        document.onmousemove = function (ev) {

            var ev = ev || event;
            obj.style.left = ev.clientX - disX + 'px';
            obj.style.top = ev.clientY - disY + 'px';
            
        }
        document.onmouseup = function () {
            document.onmousemove = document.onmousedown = null;
            if (obj.releaseCapture) obj.releaseCapture();
        }
        return false;
    }
}

//cookie
//设置cookie: setCookie('name','dxy',1);
function setCookie(key, value, t) {
    var oDate = new Date();
    oDate.setDate( oDate.getDate() + t );
    document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}
//获取cookie: getCookie('name');
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i=0; i<arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if ( arr2[0] == key ) {
            return decodeURI(arr2[1]);
        }
    }
}
//删除cookie: removeCookie('name');
function removeCookie(key) {
    setCookie(key, '', -1);
}