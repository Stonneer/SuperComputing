package net.lab1024.sa.admin.module.business.supercomputing.selectfilds.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ColumnsEntity {
    private String primaryKey;
    private String columns;

    @Override
    public String toString() {
        return  "{\"primaryKey\":\"" + primaryKey + '\"' +
                ",\"columns\":" + columns +
                '}';
    }
}
