import { postRequest, getRequest } from '/@/lib/axios';


export const selectFieldsApi = {

    queryPage : (param) => {
        return postRequest('/student/queryPage', param);
    },

}