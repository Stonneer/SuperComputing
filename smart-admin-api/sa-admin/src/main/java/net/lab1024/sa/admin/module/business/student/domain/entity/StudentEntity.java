package net.lab1024.sa.admin.module.business.student.domain.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * 学生表 实体类
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@Data
@TableName("t_student")
public class StudentEntity {

    /**
     * ketId
     */
    @TableId
    private Integer keyId;

    /**
     * 学号
     */
    private Integer stuId;

    /**
     * 姓名
     */
    private String stuName;

    /**
     * 年龄
     */
    private Integer stuAge;

    /**
     * 地址
     */
    private String stuAddress;

    /**
     * 年级
     */
    private String stuClass;

    /**
     * 电话号码
     */
    private String stuPhone;

    /**
     * 邮箱
     */
    private String stuEmail;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

}
