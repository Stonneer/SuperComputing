import {getRequest, postRequest} from '/@/lib/axios';


export const selectFieldsApi = {

    //为datatable赋值

    queryFields: (tableName) => {
        return getRequest(`/query/getTableColumns/${tableName}`);
    },

    queryTable: (tableName) => {
        return getRequest(`/query/getTable/${tableName}`);
    },

    saveColumn: (SelectedColumn) => {
        return postRequest('/query/saveColumn', SelectedColumn);
    }
}