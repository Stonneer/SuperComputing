package net.lab1024.sa.admin.module.business.student.domain.form;

import net.lab1024.sa.base.common.domain.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 学生表 分页查询表单
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@Data
@EqualsAndHashCode(callSuper = false)
public class StudentQueryForm extends PageParam {

    @Schema(description = "姓名查询")
    private String stu_name;

}
