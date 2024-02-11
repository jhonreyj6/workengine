export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            sayGoodbye: (msg: string) => {
                console.log(`Goodbye ${msg}`);
                
            }
        }
    }
    
})