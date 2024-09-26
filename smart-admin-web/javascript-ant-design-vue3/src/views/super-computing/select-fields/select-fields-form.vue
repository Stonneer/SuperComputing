<script setup>
import {ref, onMounted, reactive, nextTick} from 'vue';
import axios from 'axios';
import {selectFieldsApi} from "/@/api/super-computing/select-fields-api.js";
import hideForm from "./select-fields-list.vue"
import _ from 'lodash';


// 声明响应式变量
const fields = ref([]);
const targetKeys = ref([]);
const items = ref([]);
const queryFormState = {
  pageNum: 1,
  pageSize: 10,
};

const emits = defineEmits(['reloadList']);

const queryForm = reactive({...queryFormState});

// 定义获取字段的方法
const fetchData = async () => {
  try {
    let response = await selectFieldsApi.queryPage(queryForm);
    items.value = response.data.list;

    if (items.value.length > 0) {
      // 使用第一个对象的键作为列名
      fields.value = Object.keys(items.value[0]).map(key => ({
        title: key,
        dataIndex: key,
        key: key
      }));
    }
    targetKeys.value = fields.value.filter(item => item.chosen).map(item => item.key);
  } catch (error) {
    console.error("There was an error fetching the fields!", error);
  }
};

// 处理穿梭框变化
const handleChange = (keys, direction, moveKeys) => {
  console.log('targetKeys: ', keys);
  console.log('direction: ', direction);
  console.log('moveKeys: ', moveKeys);
};

// 在组件挂载后调用获取字段的方法
onMounted(() => {
  fetchData();
});

// ------------------------ 显示与隐藏 ------------------------
// 是否显示
const formRef = ref();
const visibleFlag = ref(false);

function show(rowData) {
  Object.assign(form, formDefault);
  if (rowData && !_.isEmpty(rowData)) {
    Object.assign(form, rowData);
  }
  visibleFlag.value = true;
  nextTick(() => {
    formRef.value.clearValidate();
  });
}

function onClose() {
  Object.assign(form, formDefault);
  visibleFlag.value = false;
}
</script>

<template>
    <a-transfer
        v-model:target-keys="targetKeys"
        :data-source="fields.values()"
        show-search
        :list-style="{
      width: '400px',
      height: '500px',
    }"
        :operations="['选择', '取消选择']"
        :render="item => `${item.title}`"
        @change="handleChange"
    >
      <template #footer="{ direction }">
        <!--      TODO 取消按钮-->
        <a-button
            v-if="direction === 'left'"
            size="small"
            style="float: left; margin: 5px"
            @click="onClose"
        >
          取消
        </a-button>

        <!--      TODO 保存按钮-->
        <a-button
            v-else-if="direction === 'right'"
            size="small"
            style="float: right; margin: 5px"
            @click="fetchData"
        >
          保存
        </a-button>

      </template>
      <template #notFoundContent>
        <span>未查询到此字段</span>
      </template>
    </a-transfer>

</template>

<style scoped lang="less">

</style>