package net.lab1024.sa.admin.module.business.student.service;

import java.util.List;
import net.lab1024.sa.admin.module.business.student.dao.StudentDao;
import net.lab1024.sa.admin.module.business.student.domain.entity.StudentEntity;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentAddForm;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentQueryForm;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentUpdateForm;
import net.lab1024.sa.admin.module.business.student.domain.vo.StudentVO;
import net.lab1024.sa.base.common.util.SmartBeanUtil;
import net.lab1024.sa.base.common.util.SmartPageUtil;
import net.lab1024.sa.base.common.domain.ResponseDTO;
import net.lab1024.sa.base.common.domain.PageResult;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 角色表 Service
 *
 * @Author Razor
 * @Date 2024-09-20 10:40:04
 * @Copyright @Razor
 */

@Service
public class StudentService {

    @Resource
    private StudentDao studentDao;

    /**
     * 分页查询
     *
     * @param queryForm
     * @return
     */
    public PageResult<StudentVO> queryPage(StudentQueryForm queryForm) {
        Page<?> page = SmartPageUtil.convert2PageQuery(queryForm);
        List<StudentVO> list = studentDao.queryPage(page, queryForm);
        return SmartPageUtil.convert2PageResult(page, list);
    }

    /**
     * 添加
     */
    public ResponseDTO<String> add(StudentAddForm addForm) {
        StudentEntity studentEntity = SmartBeanUtil.copy(addForm, StudentEntity.class);
        studentDao.insert(studentEntity);
        return ResponseDTO.ok();
    }

    /**
     * 更新
     *
     * @param updateForm
     * @return
     */
    public ResponseDTO<String> update(StudentUpdateForm updateForm) {
        StudentEntity studentEntity = SmartBeanUtil.copy(updateForm, StudentEntity.class);
        studentDao.updateById(studentEntity);
        return ResponseDTO.ok();
    }

    /**
     * 批量删除
     *
     * @param idList
     * @return
     */
    public ResponseDTO<String> batchDelete(List<Long> idList) {
        if (CollectionUtils.isEmpty(idList)){
            return ResponseDTO.ok();
        }

        studentDao.deleteBatchIds(idList);
        return ResponseDTO.ok();
    }

    /**
     * 单个删除
     */
    public ResponseDTO<String> delete(Long roleId) {
        if (null == roleId){
            return ResponseDTO.ok();
        }

        studentDao.deleteById(roleId);
        return ResponseDTO.ok();
    }
}
