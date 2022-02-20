<template>
    <div class="page-root">

        <span>
            当前用户危化品危险等级划分统计
        </span>

        <!-- 记得给容器加宽高，不然无法显示 -->
        <div id="myChart" style="width: 500px; height: 300px;"></div>

        <span>
            当前用户危化品危险地区划分统计
        </span>
        <div id="myChart2" style="width: 500px; height: 300px;"></div>


        <span class='send-message' @click="sendMessage">发送预警信息</span>
    </div>
</template>

<script>

    import {getAllListByUserId, sendMessageToUser} from "../../api/request";
    import {getSearchByName} from "../../util"
    import {Dialog} from "vant";
    // 引入echarts
    var echarts = require('echarts');

    export default {
        name: "SingleDataCount",
        data() {
            return {};
        },
        created() {
            var then = this;
            // 调用方法创建
            setTimeout(function () {
                then.drawLine();
            }, 500);
        },
        methods: {
            sendMessage: async function () {
                let params = {
                    'userId': getSearchByName('id')
                }
                let result = await sendMessageToUser(params)
                if (result.msg == 'success') {
                    Dialog.confirm({
                        title: '发送成功'
                    }).then(() => {

                    }).catch(() => {
                        // on cancel
                    });
                }
            },
            async drawLine() {
                let params = {
                    'userId': getSearchByName('id')
                }
                let reusult = await getAllListByUserId(params)
                let dataArray = reusult.data
                let dataGroup = this.groupBy(dataArray, function (item) {
                    return [item.level]
                })

                console.log(dataGroup[0], 11111)
                let data = [];
                for (let i = 0; i < dataGroup.length; i++) {
                    data.push({
                        value: dataGroup[i].length,
                        name: '危险等级' + dataGroup[i][0].level
                    },)
                }

                // 初始化echarts实例
                let myChart = echarts.init(document.getElementById("myChart"));

                // 屏幕尺寸变化时，重新调整图表元素大小
                let sizeFun = function () {
                    myChart.resize();
                };
                window.addEventListener("resize", sizeFun);

                // 绘制图表
                myChart.setOption({
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',    // 设置图表类型为饼图
                            radius: '60%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                            data: data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: '{b} : {c} ({d}%)'
                                    },
                                    labelLine: {show: true}
                                }
                            }
                        }
                    ]
                });


                //地区划分
                let dataLocationGroup = this.groupBy(dataArray, function (item) {
                    return [item.location]
                })

                console.log(dataLocationGroup[0], 11111)
                let dataLocation = [];
                let dataLocationXArr = [];
                for (let i = 0; i < dataLocationGroup.length; i++) {
                    dataLocation.push({
                        value: dataLocationGroup[i].length,
                        name: '等级' + dataLocationGroup[i][0].location
                    },)
                    dataLocationXArr.push(dataLocationGroup[i][0].location)
                }
                // 初始化echarts实例
                let myChart2 = echarts.init(document.getElementById("myChart2"));

                // 屏幕尺寸变化时，重新调整图表元素大小
                let sizeFun2 = function () {
                    myChart2.resize();
                };
                window.addEventListener("resize", sizeFun2);

                // 绘制图表
                myChart2.setOption({
                    xAxis: {
                        type: 'category',
                        data: dataLocationXArr
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: dataLocation,
                        type: 'line',
                        smooth: true
                    }],
                });
            },


            groupBy(array, f) {
                const groups = {};
                array.forEach(function (o) { //注意这里必须是forEach 大写
                    const group = JSON.stringify(f(o));
                    groups[group] = groups[group] || [];
                    groups[group].push(o);
                });
                return Object.keys(groups).map(function (group) {
                    return groups[group];
                });
            }
        }

    }
</script>

<style scoped lang="less">

    .page-root {
        background: white;
        display: flex;
        flex-direction: column;

        span {
            margin-top: 80px;
            font-size: 2rem;
            color: #93a6b9;
        }

        #myChart, #myChart2 {
            margin-top: 50px;
            width: 100%;
            background: white;
            margin-left: auto;
            margin-right: auto;
        }

        .send-message {
            background: orangered;
            width: 30%;
            margin: 30px auto;
            color: white;
            font-size: 1.0rem;
            padding: 15px 10px;
            border-radius: 10px;
        }

    }


</style>