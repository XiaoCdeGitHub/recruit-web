import ReactEcharts from "echarts-for-react"

import styles from '../ShowInfo.module.css' 

export default function Gender({ title, data }) {
    const getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
            },
            legend: {
                show: false,

            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 5,
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    },
                    data: [
                        { value: data[0], name: '男', itemStyle: { color: '#234199' } },
                        { value: data[1], name: '女', itemStyle: { color: 'pink' } }
                    ]
                }
            ],
        };
        return option;
    };
    return (
        <div className={styles.gender}>
            <ReactEcharts option={getOption()} style={{ width: '100%', height: '90%' }} />  
            <h3>{title}</h3>
        </div>
    );
}