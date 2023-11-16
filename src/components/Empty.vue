<template>
    <div class="empty-content">
        <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-inbox-full"></use>
        </svg>还没购买哦-_-
    </div>
</template>

<style scoped>
    .empty-content {
        flex: 1;
        margin: 10px;
        font-size: 10px;
        overflow-y: auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
        height: 72vh;
    }
    .empty-content .icon {
        margin-bottom: 5px;
    }
</style>