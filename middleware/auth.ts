export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to);
    console.log(from);
    if (to.matched.some(record => record.meta.auth)) {
        console.log('need authentication');
    }
});