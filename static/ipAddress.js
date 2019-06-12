var IpParameters = function() {
	/*******IP地址************/
	this.serverIp = "http://127.0.0.1";
	
	/*******端口************/
	this.port = ':'+window.location.port;

}
//告警接口
IpParameters.prototype.alarm = function() {
	return this.serverIp + this.port + "/static/json/alarm.json";
}
//饼图接口
IpParameters.prototype.bingtu = function() {
	return this.serverIp + this.port + "/static/json/bingtu.json";
}
//柱状图接口
IpParameters.prototype.zhutu = function() {
	return this.serverIp + this.port + "/static/json/zhutu.json";
}
//堆叠图接口
IpParameters.prototype.duidietu = function() {
	return this.serverIp + this.port + "/static/json/duidietu.json";
}
//地图接口
IpParameters.prototype.shanximap = function() {
	return this.serverIp + this.port + "/static/json/map.json";
}
//监控点位接口
IpParameters.prototype.jkdw = function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}
////主变负荷线条图接口
IpParameters.prototype.zhubian = function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}
//仪表盘风速接口
IpParameters.prototype.ybpfs = function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}
//仪表盘温度接口
IpParameters.prototype.ybpwd = function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}
//仪表盘湿度接口
IpParameters.prototype.ybpsd = function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}
//仪表盘雨量雨雪接口
IpParameters.prototype.ybpylyx= function() {
	return this.serverIp + this.port + "/static/json/jkdw.json";
}