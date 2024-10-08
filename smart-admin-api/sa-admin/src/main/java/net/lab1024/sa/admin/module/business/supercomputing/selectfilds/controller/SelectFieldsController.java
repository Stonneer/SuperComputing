package net.lab1024.sa.admin.module.business.supercomputing.selectfilds.controller;


import cn.dev33.satoken.annotation.SaCheckPermission;
import io.swagger.v3.oas.annotations.Operation;
import net.lab1024.sa.admin.module.business.supercomputing.selectfilds.service.impl.SelectFieldsServiceImplement;
import net.lab1024.sa.base.common.domain.ResponseDTO;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 *  超算-MySQL-字段查询 Controller
 *
 *  @author Razor
 */

@RestController
public class SelectFieldsController {

    @Resource
    private SelectFieldsServiceImplement selectFieldsServiceImplement;

    @Operation(summary = "查询全表 @author Razor")
    @GetMapping("/query/getTable/{tableName}")
    @SaCheckPermission("selectTable:query")
    public ResponseDTO<List<Map<String, Object>>> queryTable(@PathVariable String tableName) {
        return ResponseDTO.ok(selectFieldsServiceImplement.queryTable(tableName));
    }

    @Operation(summary = "查询表字段 @author Razor")
    @GetMapping("/query/getTableColumns/{tableName}")
    @SaCheckPermission("selectColumn:query")
    public ResponseDTO<List<Map<String, String>>> queryTableColumn(@PathVariable String tableName) {
        return ResponseDTO.ok(selectFieldsServiceImplement.queryTableColumn(tableName));
    }

    @Operation(summary = "向数据源表存入选择的字段 @author Razor")
    @PostMapping("/query/saveColumn")
    @SaCheckPermission("selectedColumn:update")
    public ResponseDTO<String> saveColumn(@RequestBody String columnName) {
        return selectFieldsServiceImplement.saveColumn(columnName);
    }

    @Operation(summary = "获取用户想要查询字段的所在表名 @author Razor")
    @GetMapping("/query/getTableName")
    public ResponseDTO<String> getTableName() {
        return ResponseDTO.ok(selectFieldsServiceImplement.getTableName());
    }
}
