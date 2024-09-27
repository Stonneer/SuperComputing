<script setup>
import {ref, onMounted, reactive} from 'vue';
import {selectFieldsApi} from "/@/api/super-computing/select-fields-api.js";


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

//---------------显示与隐藏---------------
const open = ref(false);
const confirmLoading = ref(false);

function showModal() {
  open.value = true;
}

const handleOk = () => {
  confirmLoading.value = true;
  setTimeout(() => {
    open.value = false;
    confirmLoading.value = false;
  }, 100);
};
defineExpose({
  showModal
});

// ---------------保存按钮---------------
const save = () => {
  // todo 提交数据
  handleOk()
};
</script>

<template>
  <a-modal
      v-model:open="open"
      title="请选择字段"
      :confirm-loading="confirmLoading"
      @ok="save"
      z-index="1000"
      ok-text="下一步"
  >

    <a-transfer
        v-model:target-keys="targetKeys"
        :data-source="fields.values()"
        show-search
        :list-style="{
      width: '400px',
      height: '500px',
    }"
        operationStyle=""
        :render="item => `${item.title}`"
        @change="handleChange"
    >
      <template #footer="{ direction }">
        <a-button
            v-if="direction === 'left'"
            size="small"
            style="float: left; margin: 5px"
            @click="onClose"
        >
          清空选择
        </a-button>


      </template>
      <template #notFoundContent>
        <span>未查询到此字段</span>
      </template>
    </a-transfer>

  </a-modal>


</template>

<style scoped lang="less">

</style>