function alarmMonitor(that) {
    //监听告警信息
    that.connection.on("getAlarmMessage", (data) => {
        data = JSON.parse(data);
        if (data[0].Ssdz==sessionStorage.ssdzId) {
            var obj = data[0]
            var Notification = that.$notify({
                title: obj.SsdzName,
                message: obj.AlarmDesc,
                type: 'warning',
                duration:0,
                onClick:function () {
                    that.$router.push("/home/main/znld?n=3&title=智能联动");
                    Notification.close();
                }
            });
        }
    });
}
module.exports = alarmMonitor;