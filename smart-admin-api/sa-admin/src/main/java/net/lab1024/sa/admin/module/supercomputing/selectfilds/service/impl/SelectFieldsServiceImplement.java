package net.lab1024.sa.admin.module.supercomputing.selectfilds.service.impl;

import net.lab1024.sa.admin.module.supercomputing.selectfilds.dao.SelectFieldsDao;
import net.lab1024.sa.admin.module.supercomputing.selectfilds.service.SelectFieldsService;
import net.lab1024.sa.base.common.domain.ResponseDTO;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class SelectFieldsServiceImplement implements SelectFieldsService {

    @Resource
    private SelectFieldsDao selectFieldsDao;


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
    public List<String> saveColumn(String columns) {
        return selectFieldsDao.saveColumn(columns);
    }
}
