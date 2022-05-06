import {createI18n} from "vue-i18n";
import en from "./lang/en";
import zh from "./lang/zh";

const I18n = createI18n({
    locale: "en",
    messages: {
        en,
        zh
    }
});

export default I18n;