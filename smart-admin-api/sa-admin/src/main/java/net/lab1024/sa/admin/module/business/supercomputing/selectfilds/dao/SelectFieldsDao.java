package net.lab1024.sa.admin.module.business.supercomputing.selectfilds.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * 超算-MySQL-字段查询 Dao
 */

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
    //todo 可能会有bug，可能读取不同数据库schema时会有错误 (我感觉要加上schemaName参数！)
    @Select("select column_name,data_type from information_schema.columns where table_name = #{tableName}")
    List<Map<String, String>> queryTableColumn(String tableName);
    /**
     * 根据表名查询主键
     */
    @Select("select column_name from information_schema.columns where table_name = #{tableName} and column_key = 'PRI'")
    String queryTablePrimaryKey(String tableName);

    /**
     * 向数据源表存入所选字段
     */
    //todo 要根据datasourceID 来更新数据源表
    @Update("UPDATE smart_admin_v3.datasource " +
            "SET update_time = CURRENT_TIMESTAMP, source_columns = #{columns} " +
            "order by create_time desc limit 1 ")
    void saveColumn(String columns);

    /**
     * 获取数据源表名
     */
    //todo 此处有问题，现在是查询最新一列作为这个数据源，
    // 万一在用户进入选择字段操作界面时有新的数据源被创建，
    // 那么就会获取到错误的数据源表名
    @Select("select source_tablename \n" +
            "from smart_admin_v3.datasource " +
//            "where source_tablename is not null " +
//            "and source_columns is null \n" +
            "order by create_time desc limit 1 ")
    String getTableName();
}
