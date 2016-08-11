var oInputText = document.getElementById('input-text');
var oDis = document.getElementById('display');

// 给四个按钮绑定相应的事件
function addEvent() {
  var aBtn = document.getElementsByTagName('button');
  aBtn[0].addEventListener('click', add, false);
  aBtn[1].addEventListener('click', add, false);
  aBtn[2].addEventListener('click', leftOut, false);
  aBtn[3].addEventListener('click', rightOut, false);
}

// 左侧入
function leftIn() {
  if (oInputText.value != "") {
    var oNew = document.createElement('div');
    oNew.innerHTML = oInputText.value;
    oDis.insertBefore(oNew, oDis.children[0]);
  }
} 

// 右侧入
function rightIn() {
  var oNew = document.createElement('div');
  oNew.innerHTML = oInputText.value;
  oDis.appendChild(oNew);
}

function add() {
  if (oInputText.value != "") {
    var oNew = document.createElement('div');
    oNew.innerHTML = oInputText.value;
    if (this == document.getElementsByTagName('button')[0]) {
      oDis.insertBefore(oNew, oDis.children[0]);
    } else{
      oDis.appendChild(oNew);
    }
  } else {
    alert("请输入！");
  }  
}
// 左侧出
function leftOut() {
  if (oDis.children.length > 0) {
    oDis.removeChild(oDis.children[0]);
  };
}

// 右侧出
function rightOut() {
  if (oDis.children.length > 0) {
    oDis.removeChild(oDis.children[oDis.children.length - 1]);
  };   
}

addEvent();
