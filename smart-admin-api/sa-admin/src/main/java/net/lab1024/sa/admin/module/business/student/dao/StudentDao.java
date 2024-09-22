package net.lab1024.sa.admin.module.business.student.dao;

import java.util.List;
import net.lab1024.sa.admin.module.business.student.domain.entity.StudentEntity;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentQueryForm;
import net.lab1024.sa.admin.module.business.student.domain.vo.StudentVO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

/**
 * 学生表 Dao
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@Mapper
@Component
public interface StudentDao extends BaseMapper<StudentEntity> {

    /**
     * 分页 查询
     *
     * @param page
     * @param queryForm
     * @return
     */
    List<StudentVO> queryPage(Page page, @Param("queryForm") StudentQueryForm queryForm);

}
