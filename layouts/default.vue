<template lang="">
    <div>
        <Nav />
        <div>
            <slot />
        </div>
    </div>
</template>
<script setup>
const { sayHello } = useUtils();
const { $sayGoodbye } = useNuxtApp();
sayHello();
$sayGoodbye('Rey');

</script>
<style lang="">
</style>