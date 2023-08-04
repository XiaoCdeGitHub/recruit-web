import ReactEcharts from "echarts-for-react"

export default function Date({ title,dates }) {
    const getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item',
            },
            xAxis: {
                type: 'category',
                data: dates.date,
                axisLabel: {
                    textStyle: {
                        show: true,
                        fontSize: '20',
                        fontWeight: '600',
                        color: 'black',
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        show: true,
                        fontSize: '15',
                        fontWeight: '500',
                        color: 'black',
                    },
                },
            },
            series: [
                {
                    data: dates.number,
                    type: 'line',
                    color: "#234199",
                    label: {
                        show: true,
                        position: 'top',
                        valueAnimation: true,
                        textStyle: {
                            fontSize: 20,
                            fontWeight: '500',
                            color: 'black'
                        }
                    },
                }
            ]
        };
        return option;
    };
    return (
        <>
            <ReactEcharts option={getOption()} style={{ width: '100%', height: '95%' }} />
            <h2>{ title }</h2>
        </>
    );
}