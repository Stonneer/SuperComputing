package net.lab1024.sa.admin.module.supercomputing.selectfilds.service;

import net.lab1024.sa.base.common.domain.ResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface SelectFieldsService {

    /**
     * 查询整表
     */
    List<Map<String, Object>> queryTable(String tableName);

    /**
     * 查询表字段
     */
    List<Map<String, String>> queryTableColumn(String tableName);

    /**
     * 向数据源表存入所选字段
     */
    List<String> saveColumn(String columnName);
}
