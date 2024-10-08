package net.lab1024.sa.admin.module.business.supercomputing.selectfilds.service.impl;

import net.lab1024.sa.admin.module.business.supercomputing.selectfilds.dao.SelectFieldsDao;
import net.lab1024.sa.admin.module.business.supercomputing.selectfilds.domain.entity.ColumnsEntity;
import net.lab1024.sa.admin.module.business.supercomputing.selectfilds.service.SelectFieldsService;
import net.lab1024.sa.base.common.domain.ResponseDTO;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.Console;
import java.util.List;
import java.util.Map;

/**
 * 超算-MySQL-字段查询
 */

@Service
public class SelectFieldsServiceImplement implements SelectFieldsService {

    @Resource
    private SelectFieldsDao selectFieldsDao;

    private ColumnsEntity columnsEntity = new ColumnsEntity();

    /**
     * 查询整表
     */
    @Override
    public List<Map<String, Object>> queryTable(String tableName) {
        return selectFieldsDao.queryTable(tableName);
    }


    /**
     * 查询表字段
     */
    @Override
    public List<Map<String, String>> queryTableColumn(String tableName) {

        return selectFieldsDao.queryTableColumn(tableName);
    }

    /**
     * 向数据源表存入所选字段
     */
    @Override
    public ResponseDTO<String> saveColumn(String columns) {
        columnsEntity.setColumns(columns);
        columnsEntity.setPrimaryKey(selectFieldsDao.queryTablePrimaryKey(selectFieldsDao.getTableName()));
        //控制台输出columnsEntity
        System.out.println("444444444444444444444444"+columnsEntity);
        selectFieldsDao.saveColumn(columnsEntity.toString());
        return ResponseDTO.ok();
    }

    /**
     * 获取用户想要查询字段的表名
     */
    @Override
    public String getTableName() {
        return selectFieldsDao.getTableName();
    }
}
