import {createApp} from "vue"

import result from './index.vue'

export default {
    install(Vue:any) {
        let el:any = null
        let instance = createApp(result);
        let bodyDom = document.getElementById('global')
        if (bodyDom) {
            el = instance.mount('#global')
        }
        window.$result = {
            show: (data:any)=> {
                el.updateMask(data)
            }
        };
        Vue.config.globalProperties.$result = {
            show: (data:any)=> {
                el.updateMask(data)
            }
        };
    }
};