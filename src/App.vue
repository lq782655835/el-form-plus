<template>
  <div id="app">
    <el-form-plus
      :refObj.sync="formConfig.ref"
      :formModel="form"
      :fieldList="formConfig.fieldList"
      size="small"
    >
      <template #item-ssh>
        <el-switch
          v-model="form['ssh']"
          active-text="开启"
          inactive-text="不开启"
        />
        <el-link type="primary" icon="el-icon-upload">去上传ssh公钥</el-link>
      </template>
    </el-form-plus>
    <el-button type="primary" @click="submit" size="small">确定</el-button>
    <div>
      如下是配置文件：
      {{
        `
          fieldList: [
              {
                  label: '项目名称',
                  value: 'name',
                  type: 'input',
                  disabled: !this.isAddPage,
                  placeholder: '支持格式：小写字母、数字以及-,首位必须是字母',
                  required: true,
                  pattern: /^[a-z]([-a-z0-9]*[a-z0-9])?$/g,
                  autofocus: true
              },
              {
                  label: '项目部门',
                  value: 'department',
                  type: 'input',
                  disabled: true,
                  required: true
              },
              {
                    label: '镜像地址',
                    value: 'customImageCheck',
                    type: 'radio-group',
                    options: [
                        { label: '平台镜像', value: false },
                        { label: '自定义', value: true }
                    ],
                    required: true
              },
              {
                  label: '',
                  value: 'customImage',
                  type: 'input',
                  className: 'depend-item',
                  placeholder: '请输入自定义镜像',
                  hidden: !this.form.customImageCheck,
                  required: this.form.customImageCheck
              },
              {
                    label: '',
                    value: 'image',
                    type: 'select',
                    options: ['docker1', 'docker2'].map(str => ({label: str, value: str})),
                    className: 'depend-item',
                    placeholder: '请选择平台镜像',
                    hidden: this.form.customImageCheck,
                    required: !this.form.customImageCheck
                },
              {
                  label: 'SSH服务',
                  value: 'ssh',
                  type: 'slot',
                  required: true,
                  tooltip:
                      '在上传机器的ssh公钥并开启Notebook的ssh服务后，可以使用该机器远程终端访问该Notebook'
              }
          ]`
      }}
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      form: {
        name: "",
        department: "yanxuan",
        manager: "",
        customImageCheck: false,
        ssh: false,
        switch: false
      }
    };
  },
  computed: {
    isAddPage() {
      return true;
    },
    formConfig() {
      return {
        ref: null,
        fieldList: [
          {
            label: "项目名称",
            value: "name",
            type: "input",
            disabled: !this.isAddPage,
            placeholder: "支持格式：小写字母、数字以及-,首位必须是字母",
            required: true,
            pattern: /^[a-z]([-a-z0-9]*[a-z0-9])?$/g,
            autofocus: true
          },
          {
            label: "项目部门",
            value: "department",
            type: "input",
            disabled: true,
            required: true
          },
          {
            label: "镜像地址",
            value: "customImageCheck",
            type: "radio-group",
            options: [
              { label: "平台镜像", value: false },
              { label: "自定义", value: true }
            ],
            required: true
          },
          {
            label: "",
            value: "customImage",
            type: "input",
            className: "depend-item",
            placeholder: "请输入自定义镜像",
            hidden: !this.form.customImageCheck,
            required: this.form.customImageCheck
          },
          {
            label: "",
            value: "image",
            type: "select",
            options: ["docker1", "docker2"].map(str => ({
              label: str,
              value: str
            })),
            className: "depend-item",
            placeholder: "请选择平台镜像",
            hidden: this.form.customImageCheck,
            required: !this.form.customImageCheck
          },
          {
            label: "SSH服务",
            value: "ssh",
            type: "slot",
            required: true,
            tooltip:
              "在上传机器的ssh公钥并开启Notebook的ssh服务后，可以使用该机器远程终端访问该Notebook"
          },
          {
            label: '动态组件',
            type: 'el-switch',
            value: 'switch'
          }
        ]
      };
    }
  },
  methods: {
    async submit() {
      let isPass = await this.formConfig.ref.validate();
      if (!isPass) return;
      // ... do server interface
    }
  }
};
</script>
