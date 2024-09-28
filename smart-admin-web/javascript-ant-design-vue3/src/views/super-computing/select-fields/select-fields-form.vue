<script setup>
import {ref, onMounted, reactive} from 'vue';
import {selectFieldsApi} from "/@/api/super-computing/select-fields-api.js";


// 声明响应式变量
let fields = ref([]);
let targetKeys = ref([{}]);
let items = ref([]);

let emits = defineEmits(['reloadList']);

// 定义获取字段的方法
const fetchData = async () => {
  try {
    let response = await selectFieldsApi.queryFields("t_student");
    items.value = response.data;

    if (items.value.length > 0) {

      items.value.forEach(item => {
        fields.value.push({
          key: item.COLUMN_NAME,
          title: item.COLUMN_NAME,
          description: item.DATA_TYPE,
          chosen: false
        })
      })
    }
    targetKeys.value = fields.value.filter(item => item.chosen).map(item => item.key);
  } catch (error) {
    console.error("There was an error fetching the fields!", error);
  }
};

let data = {};
// 处理穿梭框变化
const handleChange = (keys, direction, moveKeys) => {
  let selectdefields = ref("")
  console.log('targetKeys: ', keys);
  console.log('direction: ', direction);
  console.log('moveKeys: ', moveKeys);
  keys.forEach(key => {
   selectdefields.value += key + ","
  })
  console.log(selectdefields.value)

  //创建一个json格式的变量
  keys.forEach(key => {
    console.log("Key:"+key)
    //存入data，键为targetKeysKey，值为item.DATA_TYPE
    items.value.forEach(item => {
      if (key === item.COLUMN_NAME) {
        data[key] = item.DATA_TYPE;
      }
    })
  })
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


const save = () => {
  console.log(data)
  selectFieldsApi.saveColumn(data).then(successSave)
}

//todo 保存成功
const successSave = (response) => {

}

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

      <template #notFoundContent>
        <span>未查询到此字段</span>
      </template>
    </a-transfer>

  </a-modal>


</template>

<style scoped lang="less">

</style>