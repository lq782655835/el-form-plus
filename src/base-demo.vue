<template>
  <el-form-plus
    :formModel="{
      name: '',
      age: '',
      address: '',
      sex: '男'
    }"
    :fieldList="[
      { label: '姓名', value: 'name', type: 'input' },
      { label: '年龄', value: 'age', type: 'input' },
      {
        label: '家庭住址',
        value: 'address',
        type: 'select',
        options: ['地址1', '地址2'].map(str => ({ label: str, value: str }))
      },
      {
        label: '性别',
        value: 'sex',
        type: 'radio-group',
        options: ['男', '女'].map(str => ({ label: str, value: str }))
      }
    ]"
  />
</template>
