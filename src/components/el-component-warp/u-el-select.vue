<template>
    <el-select v-model="svalue" v-bind="$attrs" v-on="$listeners" class="u-el-select">
        <el-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
        <li v-if="newRow" class="el-select-dropdown__item">
            <u-link type="primary" @click="$emit('add-new-row')" icon="el-icon-plus">
                {{ newRow }}
            </u-link>
        </li>
        <template v-if="newRow" #empty>
            <li class="el-select-dropdown__item">
                <u-link type="primary" @click="$emit('add-new-row')" icon="el-icon-plus">
                    {{ newRow }}
                </u-link>
            </li>
        </template>
    </el-select>
</template>

<script>
export default {
    name: 'u-el-select',
    props: {
        value: String,
        options: [Array, Object],
        newRow: String
    },
    data() {
        return {
            svalue: this.value,
            items: []
        }
    },
    watch: {
        selected(val) {
            this.$emit('input', val)
        },
        value(val) {
            this.svalue = val
        },
        options(val) {
            this.getSelectOptions()
        }
    },
    mounted() {
        this.getSelectOptions()
    },
    methods: {
        getSelectOptions() {
            let { options } = this
            if (!options || typeof options !== 'object') return

            let _dataTransform = (arr, fileType) => {
                let { label: labelField, value: valueField } = fileType
                return arr.map(item => {
                    if (typeof item === 'object') {
                        return { ...item, label: item[labelField], value: item[valueField] }
                    }
                    // 针对返回[string, string类型]
                    if (typeof item === 'string') {
                        return { label: item, value: item }
                    }
                })
            }

            if (Array.isArray(this.options)) {
                this.items = this.options
            } else {
                let { api, fileType = { label: 'label', value: 'value' } } = this.options
                typeof api === 'function' &&
                    api().then(data => {
                        this.items = _dataTransform(data, fileType)
                        this.$emit('api-load', data)
                    })
            }
        }
    }
}
</script>
