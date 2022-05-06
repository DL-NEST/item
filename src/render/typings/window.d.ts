
import {UseIpcRendererReturn} from '@vueuse/electron'

declare global {
    interface Window {
        $ipc: UseIpcRendererReturn
        $fs?: any;
        $result?: any;
    }
  }
