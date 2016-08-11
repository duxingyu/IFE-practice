/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var oCity = document.getElementById('aqi-city-input');
    var oValue = document.getElementById('aqi-value-input');

    if (oCity.value != "" && oValue.value != "") {
        var oTable = document.getElementById('aqi-table');
        aqiData[oCity.value] = Number(oValue.value);
        console.log(aqiData);
        oCity.value = "";
        oValue.value = "";
    } else {
        alert("请输入数据！");
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var oCity = document.getElementById('aqi-city-input');
    var oValue = document.getElementById('aqi-value-input');
    var oTable = document.getElementById('aqi-table');
    var oTitle = document.createElement('tr');
    oTable.innerHTML = "";
    oTitle.innerHTML = "<td>城市</td><td>空气质量</td><td>操作</td>";
    oTable.appendChild(oTitle);   
    for (var attr in aqiData) {
        var oTr = document.createElement('tr');
        oTr.innerHTML = "<td>" + attr + "</td><td>" + aqiData[attr] + "</td><td><button>删除</button></td>";
        oTable.appendChild(oTr);
    }
    var aBtn = oTable.getElementsByTagName('button');
    for (var i = 0,len = aBtn.length; i < len; i++) {
        aBtn[i].onclick = delBtnHandle;
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    delete aqiData[this.parentNode.parentNode.firstChild.innerHTML];
    console.log(aqiData);
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();