import ReactEcharts from "echarts-for-react"

export default function Number({ title , number}) {
    const getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item'
            },
            dataset: {
                source: number
            },
            grid: { containLabel: true },
            xAxis: {
                show: true,
                axisLabel: {
                    textStyle: {
                        show: true,
                        fontSize: '18',
                        fontWeight: '400',
                        color: 'black',
                    },
                },
            },
            yAxis: {
                inverse: true,
                type: 'category',
                axisLabel: {
                    textStyle: {
                        show: true,
                        fontSize: '20',
                        fontWeight: '600',
                        color: 'black',
                    },
                },
            },
            visualMap: {
                show: false,
                orient: 'horizontal',
                min: 0,
                max: 500,
                dimension: 0,
                inRange: {
                    color: ['#234199', '#17234b'],
                }
            },
            series: [
                {
                    realtimeSort: true,
                    type: 'bar',
                    encode: {
                        x: 'number',
                        y: 'name'
                    },
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true,
                        textStyle: {
                            fontSize: 20,
                            fontWeight: '500',
                            color: 'black'
                        }
                    },
                    barWidth: 30,
                }
            ]
        };
        return option;
    };
    return (
        <>
            <ReactEcharts option={getOption()} style={{ width: '100%', height: '100%' }} />
            <h2>{ title }</h2>
        </>
    );
}