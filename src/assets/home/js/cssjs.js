$(function() {
    var doscroll = function(ele) {
        var $parent = $(ele);
        var $first = $parent.find('li:first');
        var height = $first.height();
        $first.animate({
            height: 0 //或者改成： marginTop: -height + 'px'
        }, 500, function() { // 动画结束后，把它插到最后，形成无缝
            $first.css('height', height).appendTo($parent);
        });
    };
    setInterval(function() {
        doscroll('.con-right-down-con ul');
        doscroll('.con-left-down-con ul');
    }, 2000);

    function clock() {
        var now = new Date()
        var year = 1900 + now.getYear() + "年<span style='color:#01d8ff;'>" + (now.getMonth() + 1) + "</span>月<span style='color:#01d8ff;'>" + now.getDate() + "</span>日 ";
        var hour = "<span style='color:#01d8ff;'>" + (now.getHours()<10?'0'+now.getHours():now.getHours()) + ":" + (now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes() )+ ":" + (now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()) + "</span> 星期";
        var weekString = "日一二三四五六";
        var week = "<span style='color:#01d8ff;'>" + weekString[now.getDay()] + "</span>";
        var datatime = year + hour + week;
        document.getElementById("clock").innerHTML = datatime;
    }
    clock();
    //年月日时分秒时间
    setInterval(function() {
        clock();
    }, 1000);
})