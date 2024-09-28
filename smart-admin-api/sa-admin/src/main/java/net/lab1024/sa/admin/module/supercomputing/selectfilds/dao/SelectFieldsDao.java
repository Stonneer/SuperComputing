package net.lab1024.sa.admin.module.supercomputing.selectfilds.dao;

import net.lab1024.sa.base.common.domain.ResponseDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface SelectFieldsDao {


    /**
     * 根据表名查询整表
     */
    @Select("select * from ${tableName}")
    List<Map<String, Object>> queryTable(String tableName);


    /**
     * 根据表名查询表字段
     */
    //todo 可能会有bug，可能读取不同数据库schema时会有错误
    @Select("select column_name,data_type from information_schema.columns where table_name = #{tableName}")
    List<Map<String, String>> queryTableColumn(String tableName);

    /**
     * 向数据源表存入所选字段
     */
    //todo 这个表要改成公用的
    @Update("insert into smart_admin_v3.datasource ( create_time, update_time,source_columns) value " +
            "(CURRENT_TIMESTAMP,  CURRENT_TIMESTAMP,#{columns}) ")
    List<String> saveColumn(String columns);
}
