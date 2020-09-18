<template>
    <div class="c-menu">
        <el-menu
            :collapse="collapse"
            background-color="#181e2a"
            text-color="#ffffff73"
            active-text-color="#fff"
            :default-active="activeName"
            @select="handleSelect"
        >
            <c-menu-tree :menuData="treeData"></c-menu-tree>
        </el-menu>
    </div>
</template>

<script>
import treeData from '@/configs/menu.config.js'
export default {
    components: {
        CMenuTree: () => import('./c-menu-tree'),
    },
    data() {
        return {
            treeData,
        }
    },
    computed: {
        collapse() {
            return this.$store.state.collapse
        },
        activeName() {
            const path = this.$route.matched[this.$route.matched.length - 1].path
            const arr = path.split('/')
            const name = arr[arr.length - 1]
            return name
        },
    },
    mounted() {},
    methods: {
        handleSelect(name, fullPath) {
            if (name === this.activeName) {
                return
            }
            const path = `/${fullPath.join('/')}`
            this.$router.push({
                path,
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.c-menu {
    height: 100%;
    background-color: rgb(24, 30, 42);
    overflow-y: auto;
    user-select: none;
}
.logo {
    height: 54px;
    background-image: linear-gradient(-135deg, #389cff 0%, #1a5fe3 100%);
    .logo-img {
        width: 24px;
        height: 24px;
    }
    .logo-txt {
        font-size: 18px;
        color: #fff;
        white-space: nowrap;
        transition: 0.3s;
        visibility: visible;
        opacity: 1;
        width: 130px;
        &.collapse {
            width: 0;
            opacity: 0;
            visibility: hidden;
        }
    }
}
::v-deep .el-menu {
    &:not(.el-menu--collapse) {
        width: 200px;
    }
    min-height: calc(100% - 54px);
    border-right: none;
    &.el-menu--collapse {
        span {
            display: none;
        }
    }
    .el-menu-item.is-active {
        background-color: #1890ff !important;
    }
    .el-menu-item:hover {
        color: #fff !important;
    }
    .el-submenu__title,
    .el-menu-item {
        height: 45px;
        line-height: 45px;
    }
}
</style>
