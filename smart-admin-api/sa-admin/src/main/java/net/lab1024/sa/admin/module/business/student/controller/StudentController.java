package net.lab1024.sa.admin.module.business.student.controller;

import net.lab1024.sa.admin.module.business.student.domain.form.StudentAddForm;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentQueryForm;
import net.lab1024.sa.admin.module.business.student.domain.form.StudentUpdateForm;
import net.lab1024.sa.admin.module.business.student.domain.vo.StudentVO;
import net.lab1024.sa.admin.module.business.student.service.StudentService;
import net.lab1024.sa.base.common.domain.ValidateList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import cn.dev33.satoken.annotation.SaCheckPermission;
import net.lab1024.sa.base.common.domain.ResponseDTO;
import net.lab1024.sa.base.common.domain.PageResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;

import javax.annotation.Resource;
import javax.validation.Valid;

/**
 * 学生表 Controller
 *
 * @Author Razor
 * @Date 2024-09-22 15:31:43
 * @Copyright @Razor
 */

@RestController
@Tag(name = "学生表")
public class StudentController {

    @Resource
    private StudentService studentService;

    @Operation(summary = "分页查询 @author Razor")
    @PostMapping("/student/queryPage")
    @SaCheckPermission("student:query")
    public ResponseDTO<PageResult<StudentVO>> queryPage(@RequestBody @Valid StudentQueryForm queryForm) {
        return ResponseDTO.ok(studentService.queryPage(queryForm));
    }

    @Operation(summary = "添加 @author Razor")
    @PostMapping("/student/add")
    @SaCheckPermission("student:add")
    public ResponseDTO<String> add(@RequestBody @Valid StudentAddForm addForm) {
        return studentService.add(addForm);
    }

    @Operation(summary = "更新 @author Razor")
    @PostMapping("/student/update")
    @SaCheckPermission("student:update")
    public ResponseDTO<String> update(@RequestBody @Valid StudentUpdateForm updateForm) {
        return studentService.update(updateForm);
    }

    @Operation(summary = "批量删除 @author Razor")
    @PostMapping("/student/batchDelete")
    @SaCheckPermission("student:delete")
    public ResponseDTO<String> batchDelete(@RequestBody ValidateList<Integer> idList) {
        return studentService.batchDelete(idList);
    }

    @Operation(summary = "单个删除 @author Razor")
    @GetMapping("/student/delete/{keyId}")
    @SaCheckPermission("student:delete")
    public ResponseDTO<String> batchDelete(@PathVariable Integer keyId) {
        return studentService.delete(keyId);
    }
}
