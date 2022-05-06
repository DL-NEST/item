import {App} from "vue";
import result from "./result";

export default function setupGlobal(app: App) {
    app.use(result);
}
