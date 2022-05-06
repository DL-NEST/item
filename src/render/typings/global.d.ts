import {AxiosStatic} from "axios";

declare module 'vue/types/vue' {
    interface Vue {
        $result: any;
    }
}