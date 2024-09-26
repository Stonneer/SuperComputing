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
import {nextTick} from 'vue';
import FieldSelector from './select-fields-form.vue';
import {CloseOutlined} from '@ant-design/icons-vue';
import StudentForm from "/@/views/business/student/student-form.vue";
import SelectFieldsForm from "/@/views/super-computing/select-fields/select-fields-form.vue";

const isFormVisible = ref(false); // 控制表单是否显示
const formContainer = ref(null); // 引用表单容器元素

// // 显示表单的方法
// const showForm = () => {
//   isFormVisible.value = true; // 设置表单可见
//   nextTick(() => {
//     formContainer.value.focus(); // 在DOM更新后将焦点移动到表单容器
//   });
// };
//
// // 隐藏表单的方法
// const hideForm = () => {
//   isFormVisible.value = false; // 设置表单不可见
//   formContainer.value.blur(); // 移除表单容器的焦点
// };

const formRef = ref();

function showForm(data) {
  formRef.value.show(data);
}
</script>

<template>
  <a-card :bordered="false" :hoverable="true">

    <a-button type="primary" @click="showForm" size="small">选择字段or导入</a-button>

    <a-table :columns="columns" :data-source="items" :loading="loading"/>



  </a-card>

  <SelectFieldsForm ref="formRef"/>

</template>


<style scoped lang="less">

</style>