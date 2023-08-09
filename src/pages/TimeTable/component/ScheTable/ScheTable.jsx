import styles from './ScheTable.module.css'

import { Table } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedGroup } from '../../../../store/timeTableSlice'

export default function ScheTable() {
    const dataSource = useSelector(state => state.timeTableSlice.showData)
    const isGroupChange = useSelector(state => state.timeTableSlice.isGroupChange)
    const selectedGroup = useSelector(state => state.timeTableSlice.selectedGroup)
    const searchGroup = useSelector(state => state.timeTableSlice.searchGroup)
    const dispatch = useDispatch()

    const columns = [
        {
            title: '组号',
            dataIndex: 'groupNum',
            key: 'groupNum',
        },
        {
            title: '开始时间',
            dataIndex: 'beginTime',
            key: 'beginTime',
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: '地点',
            dataIndex: 'place',
            key: 'place',
        },
    ];

    function isRowSelection() {
        if (isGroupChange) {
            const rowSelection = {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(selectedRowKeys, selectedRows);
                    dispatch(changeSelectedGroup([...selectedRowKeys]))
                },
                getCheckboxProps: (record) => ({
                    disabled: selectedGroup.length >= 2 && !selectedGroup.includes(record.groupNum)
                }),
                hideSelectAll: true
            };
            return rowSelection
        }
    }
    const rowClassName = (record) => {
        if (record.groupNum === searchGroup) {
            return styles['special-row']
        }
    };

    return (
        <div className={styles.tableBox}>
            <Table
                className={styles.table}
                dataSource={dataSource}
                columns={columns}
                pagination={{position: ['bottomCenter']}}
                rowSelection={isRowSelection()}
                rowClassName={rowClassName}
                locale={{emptyText: '暂无排班信息'}}
            />
        </div>
    );
}