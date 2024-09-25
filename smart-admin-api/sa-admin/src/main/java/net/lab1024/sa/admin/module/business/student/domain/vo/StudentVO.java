package net.lab1024.sa.admin.module.business.student.domain.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * 学生表 列表VO
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@Data
public class StudentVO {


    @Schema(description = "主键")
    private Integer keyId;

    @Schema(description = "姓名")
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

    @Schema(description = "创建时间")
    private LocalDateTime createTime;

    @Schema(description = "更新时间")
    private LocalDateTime updateTime;

}
