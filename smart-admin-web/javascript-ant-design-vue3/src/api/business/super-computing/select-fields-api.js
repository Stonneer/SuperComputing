import {getRequest, postRequest} from '/src/lib/axios';


export const selectFieldsApi = {

    queryFields: (tableName) => {
        return getRequest(`/query/getTableColumns/${tableName}`);
    },

    queryTable: (tableName) => {
        return getRequest(`/query/getTable/${tableName}`);
    },

    saveColumn: (SelectedColumn) => {
        return postRequest('/query/saveColumn', SelectedColumn);
    },

    /**
     * 获取想要查询的表名
     */
    getTableName() {
        return getRequest('/query/getTableName');
    }
}