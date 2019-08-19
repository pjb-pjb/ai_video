function alarmMonitor(that) {
    //监听告警信息

    that.connection.on("getAlarmMessage", (data) => {
        data = JSON.parse(data);


            if (data.cimid == "2101"){
              if (data.msg.ssdz==sessionStorage.ssdzId) {
                var obj = data.msg
                var str = window.JSON.stringify(data.msg)
                str = str.replace("#",'@@@');
                var Notification = that.$notify({
                  title: obj.ssdzname,
                  message: obj.alarmdesc,
                  type: 'warning',
                  duration: "3000",
                  onClick: function () {
                    that.$router.push(`/home/main/xwfx?n=4&title=告警记录&jsondata=${str}`);
                    Notification.close();
                  }
                });
              }
            }else if(data.cimid == "2201"){
              var obj = data.msg[0];
              var str = window.JSON.stringify(data.msg[0])
              str = str.replace("#",'@@@');



              var Notification = that.$notify({
                title: obj.ssdzname,
                message: obj.alarmdesc,
                type: 'warning',
                duration:"3000",
                onClick:function () {
                  that.$router.push(`/home/main/znld?n=4&title=告警记录&jsondata=${str}`);
                  Notification.close();
                }
              });
            }else{

            }

    });
}
module.exports = alarmMonitor;