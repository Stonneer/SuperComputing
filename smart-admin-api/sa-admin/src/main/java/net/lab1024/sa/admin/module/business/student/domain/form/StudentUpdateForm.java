package net.lab1024.sa.admin.module.business.student.domain.form;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Data;

/**
 * 学生表 更新表单
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@Data
public class StudentUpdateForm {

    @Schema(description = "ketId", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "ketId 不能为空")
    private Integer keyId;

    @Schema(description = "学号", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "学号 不能为空")
    private Integer stuId;

    @Schema(description = "姓名", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank(message = "姓名 不能为空")
    private String stuName;

    @Schema(description = "年龄")
    private Integer stuAge;

    @Schema(description = "地址")
    private String stuAddress;

    @Schema(description = "年级")
    private String stuClass;

    @Schema(description = "电话号码")
    private String stuPhone;

    @Schema(description = "邮箱")
    private String stuEmail;

    @Schema(description = "创建时间", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "创建时间 不能为空")
    private LocalDateTime createTime;

    @Schema(description = "更新时间", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "更新时间 不能为空")
    private LocalDateTime updateTime;

}