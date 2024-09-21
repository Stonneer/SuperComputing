package net.lab1024.sa.admin.module.business.student.domain.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * 角色表 列表VO
 *
 * @Author Razor
 * @Date 2024-09-20 10:40:04
 * @Copyright @Razor
 */

@Data
public class StudentVO {


    @Schema(description = "主键")
    private Long roleId;

    @Schema(description = "角色名称")
    private String roleName;

    @Schema(description = "角色编码")
    private String roleCode;

    @Schema(description = "角色描述")
    private String remark;

    @Schema(description = "创建时间")
    private LocalDateTime updateTime;

    @Schema(description = "创建时间")
    private LocalDateTime createTime;

}
