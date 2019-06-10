/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    draw: function (selector,optionData) {
                        var chart = echarts.init(document.querySelector(selector));
                        chart.setOption(optionData);
                        return chart;
                    },
                }
            }
        }
    })
}

export default {
    install
}
