<template>
    <span class="u-el-input-number">
        <el-input-number v-model="num" :min="min" v-bind="$attrs" v-on="$listeners" />
        {{ suffix }}
    </span>
</template>

<script>
export default {
    name: 'u-el-input-number',
    props: {
        value: Number,
        suffix: String,
        min: { type: Number, default: 0 } /* 默认下限为0 */
    },
    data() {
        return {}
    },
    computed: {
        num: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>
