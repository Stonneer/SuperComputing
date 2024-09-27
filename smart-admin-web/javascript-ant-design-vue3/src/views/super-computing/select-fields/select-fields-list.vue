<script setup>
import {ref, onMounted, reactive} from 'vue';
import {selectFieldsApi} from "/@/api/super-computing/select-fields-api.js";
// 声明响应式变量
const items = ref([]);
const columns = ref([]);
const loading = ref(false);
const queryFormState = {
  pageNum: 1,
  pageSize: 10,
};


const queryForm = reactive({...queryFormState});

// 定义获取数据的方法
const fetchData = async () => {
  loading.value = true; // 开始加载
  try {
    let response = await selectFieldsApi.queryPage(queryForm);
    items.value = response.data.list;

    if (items.value.length > 0) {
      // 使用第一个对象的键作为列名
      columns.value = Object.keys(items.value[0]).map(key => ({
        title: key,
        dataIndex: key,
        key: key
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

import SelectFieldsForm from "/@/views/super-computing/select-fields/select-fields-form.vue";


const formRef = ref();

function showForm() {
  formRef.value.showModal();
}
</script>

<template>
  <a-card :bordered="false" :hoverable="true">

    <a-button type="primary" @click="showForm" size="small">选择字段</a-button>

    <a-table :columns="columns" :data-source="items" :loading="loading"/>

    <SelectFieldsForm ref="formRef"/>


  </a-card>


</template>


<style scoped lang="less">

</style>