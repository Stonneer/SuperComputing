<script setup>
import {ref, onMounted, reactive} from 'vue';
import {selectFieldsApi} from "/src/api/business/super-computing/select-fields-api.js";
// 声明响应式变量
let items = ref([]);
let columns = ref([]);
let loading = ref(false);

// 定义获取数据的方法
const fetchData = async () => {
  loading.value = true; // 开始加载
  try {
    let tableName = await selectFieldsApi.getTableName();
    let response = await selectFieldsApi.queryTable(tableName.data);
    items.value = response.data;

    if (items.value.length > 0) {
     //key值为行
      columns.value = Object.keys(items.value[0]).map(key => ({
        title: key,
        dataIndex: key,
        key: key,
      }));
    }
  } catch (error) {
    console.error("There was an error fetching the data!", error);
  } finally {
    loading.value = false; // 结束加载
  }
};

// 在组件挂载后调用获取数据的方法
onMounted(() => {
  fetchData();
});


// 表单操作

import SelectFieldsForm from "/src/views/business/super-computing/select-fields/select-fields-form.vue";


const formRef = ref();

function showForm() {
  formRef.value.showModal();
}
</script>

<template>
  <a-card :bordered="false" :hoverable="true">

    <a-button type="primary" @click="showForm" size="small">选择字段</a-button>

    <a-table
        :columns="columns"
        :data-source="items"
        :loading="loading"
        :scroll="{ x: '100%', y: 300 }"
    />

    <SelectFieldsForm ref="formRef"/>


  </a-card>


</template>


<style scoped lang="less">

</style>