<!--
  * 学生表
  *
  * @Author:    Razor
  * @Date:      2024-09-22 15:31:43
  * @Copyright  @Razor
-->
<template>
  <a-modal
      :title="form.keyId ? '编辑' : '添加'"
      :width="500"
      :open="visibleFlag"
      @cancel="onClose"
      :maskClosable="false"
      :destroyOnClose="true"
  >
    <a-form ref="formRef" :model="form" :rules="rules" :label-col="{ span: 5 }" >
        <a-form-item label="主键"  name="keyId">
          <a-input-number style="width: 100%" v-model:value="form.keyId" placeholder="主键" />
        </a-form-item>
        <a-form-item label="姓名"  name="stuName">
          <a-input style="width: 100%" v-model:value="form.stuName" placeholder="姓名" />
        </a-form-item>
        <a-form-item label="年龄"  name="stuAge">
          <a-input-number style="width: 100%" v-model:value="form.stuAge" placeholder="年龄" />
        </a-form-item>
        <a-form-item label="地址"  name="stuAddress">
          <a-input style="width: 100%" v-model:value="form.stuAddress" placeholder="地址" />
        </a-form-item>
        <a-form-item label="年级"  name="stuClass">
          <a-input style="width: 100%" v-model:value="form.stuClass" placeholder="年级" />
        </a-form-item>
        <a-form-item label="电话号码"  name="stuPhone">
          <a-input style="width: 100%" v-model:value="form.stuPhone" placeholder="电话号码" />
        </a-form-item>
        <a-form-item label="邮箱"  name="stuEmail">
          <a-input style="width: 100%" v-model:value="form.stuEmail" placeholder="邮箱" />
        </a-form-item>
        <a-form-item label="创建时间"  name="createTime">
          <a-date-picker show-time valueFormat="YYYY-MM-DD HH:mm:ss" v-model:value="form.createTime" style="width: 100%" placeholder="创建时间" />
        </a-form-item>
        <a-form-item label="更新时间"  name="updateTime">
          <a-date-picker show-time valueFormat="YYYY-MM-DD HH:mm:ss" v-model:value="form.updateTime" style="width: 100%" placeholder="更新时间" />
        </a-form-item>
    </a-form>

    <template #footer>
      <a-space>
        <a-button @click="onClose">取消</a-button>
        <a-button type="primary" @click="onSubmit">保存</a-button>
      </a-space>
    </template>
  </a-modal>
</template>
<script setup>
  import { reactive, ref, nextTick } from 'vue';
  import _ from 'lodash';
  import { message } from 'ant-design-vue';
  import { SmartLoading } from '/@/components/framework/smart-loading';
  import { studentApi } from '/@/api/business/student/student-api';
  import { smartSentry } from '/@/lib/smart-sentry';

  // ------------------------ 事件 ------------------------

  const emits = defineEmits(['reloadList']);

  // ------------------------ 显示与隐藏 ------------------------
  // 是否显示
  const visibleFlag = ref(false);

  function show(rowData) {
    Object.assign(form, formDefault);
    if (rowData && !_.isEmpty(rowData)) {
      Object.assign(form, rowData);
    }
    // 使用字典时把下面这注释修改成自己的字典字段 有多个字典字段就复制多份同理修改 不然打开表单时不显示字典初始值
    // if (form.status && form.status.length > 0) {
    //   form.status = form.status.map((e) => e.valueCode);
    // }
    visibleFlag.value = true;
    nextTick(() => {
      formRef.value.clearValidate();
    });
  }

  function onClose() {
    Object.assign(form, formDefault);
    visibleFlag.value = false;
  }

  // ------------------------ 表单 ------------------------

  // 组件ref
  const formRef = ref();

  const formDefault = {
      keyId: undefined, //主键
      stuName: undefined, //姓名
      stuAge: undefined, //年龄
      stuAddress: undefined, //地址
      stuClass: undefined, //年级
      stuPhone: undefined, //电话号码
      stuEmail: undefined, //邮箱
      createTime: undefined, //创建时间
      updateTime: undefined, //更新时间
  };

  let form = reactive({ ...formDefault });

  const rules = {
      // keyId: [{ required: true, message: '主键 必填' }],
      stuName: [{ required: true, message: '姓名 必填' }],
      createTime: [{ required: true, message: '创建时间 必填' }],
      updateTime: [{ required: true, message: '更新时间 必填' }],
  };

  // 点击确定，验证表单
  async function onSubmit() {
    try {
      await formRef.value.validateFields();
      save();
    } catch (err) {
      message.error('参数验证错误，请仔细填写表单数据!');
    }
  }

  // 新建、编辑API
  async function save() {
    SmartLoading.show();
    try {
      if (form.keyId) {
        await studentApi.update(form);
      } else {
        await studentApi.add(form);
      }
      message.success('操作成功');
      emits('reloadList');
      onClose();
    } catch (err) {
      smartSentry.captureError(err);
    } finally {
      SmartLoading.hide();
    }
  }

  defineExpose({
    show,
  });
</script>
