// =========================================================
// 节气手帖 · 公共脚本
// 1. 在标题区显示今天的日期和当前节气
// 2. 表单提交时的提示
// =========================================================

// 二十四节气及其大致的公历日期（每年可能相差 1 天）
var terms = [
  { name: "小寒", month: 1, day: 5 },
  { name: "大寒", month: 1, day: 20 },
  { name: "立春", month: 2, day: 4 },
  { name: "雨水", month: 2, day: 19 },
  { name: "惊蛰", month: 3, day: 5 },
  { name: "春分", month: 3, day: 20 },
  { name: "清明", month: 4, day: 4 },
  { name: "谷雨", month: 4, day: 20 },
  { name: "立夏", month: 5, day: 5 },
  { name: "小满", month: 5, day: 21 },
  { name: "芒种", month: 6, day: 5 },
  { name: "夏至", month: 6, day: 21 },
  { name: "小暑", month: 7, day: 7 },
  { name: "大暑", month: 7, day: 22 },
  { name: "立秋", month: 8, day: 7 },
  { name: "处暑", month: 8, day: 23 },
  { name: "白露", month: 9, day: 7 },
  { name: "秋分", month: 9, day: 23 },
  { name: "寒露", month: 10, day: 8 },
  { name: "霜降", month: 10, day: 23 },
  { name: "立冬", month: 11, day: 7 },
  { name: "小雪", month: 11, day: 22 },
  { name: "大雪", month: 12, day: 7 },
  { name: "冬至", month: 12, day: 21 }
];

// 找出今天所在的节气
function getCurrentTerm(today) {
  var m = today.getMonth() + 1;
  var d = today.getDate();
  var current = terms[terms.length - 1]; // 1月5日之前属于上一年的“冬至”
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    if (m > t.month || (m === t.month && d >= t.day)) {
      current = t;
    }
  }
  return current;
}

// 页面加载后，把日期写进 id="today" 的元素
window.onload = function () {
  var now = new Date();
  var week = ["日", "一", "二", "三", "四", "五", "六"];
  var term = getCurrentTerm(now);

  var box = document.getElementById("today");
  if (box) {
    box.innerHTML =
      "<strong>今日 · " + term.name + "</strong>" +
      now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日 星期" + week[now.getDay()];
  }

  // 首页的“当前节气”大字
  var big = document.getElementById("current-term");
  if (big) {
    big.innerHTML = term.name;
  }
};

// 普通表单：只做演示提示，不真正提交
function submitTip() {
  alert("感谢你的参与！\n（本网站为课程作业，表单内容不会被真正提交）");
  return false;
}

// 小测验表单：检查选中的答案
function checkQuiz(form, answer) {
  var picked = form.querySelector("input[type=radio]:checked");
  if (!picked) {
    alert("请先选择一个答案哦～");
  } else if (picked.value === answer) {
    alert("回答正确！🎉");
  } else {
    alert("再想想～ 正确答案是：" + answer);
  }
  return false;
}
