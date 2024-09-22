/**
 * 学生表 api 封装
 *
 * @Author:    Razor
 * @Date:      2024-09-22 15:31:43
 * @Copyright  @Razor
 */
import { postRequest, getRequest } from '/@/lib/axios';

export const studentApi = {

  /**
   * 分页查询  @author  Razor
   */
  queryPage : (param) => {
    return postRequest('/student/queryPage', param);
  },

  /**
   * 增加  @author  Razor
   */
  add: (param) => {
      return postRequest('/student/add', param);
  },

  /**
   * 修改  @author  Razor
   */
  update: (param) => {
      return postRequest('/student/update', param);
  },


  /**
   * 删除  @author  Razor
   */
  delete: (id) => {
      return getRequest(`/student/delete/${id}`);
  },

  /**
   * 批量删除  @author  Razor
   */
  batchDelete: (idList) => {
      return postRequest('/student/batchDelete', idList);
  },

};
