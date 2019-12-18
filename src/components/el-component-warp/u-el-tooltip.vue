<template>
    <el-tooltip
        :content="content"
        :placement="placement"
        v-bind="$attrs"
        v-on="$listeners"
        class="u-el-tooltip"
    >
        <slot><i class="el-icon-question"/></slot>
    </el-tooltip>
</template>

<script>
export default {
    name: 'u-el-tooltip',
    props: {
        content: String,
        placement: { type: String, default: 'top' } /* 默认定位top */
    }
}
</script>
