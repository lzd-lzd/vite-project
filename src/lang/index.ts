import { createI18n } from 'vue-i18n';
import enLocale from "./en";
import zhLocale from "./zh";
import elementPlusEnLocale from "element-plus/lib/locale/lang/en";
import elementPlusZhLocale from "element-plus/lib/locale/lang/zh-cn";

const messages = {
    "en": {
        ...enLocale,
        ...elementPlusEnLocale
    },
    "zh": {
        ...zhLocale,
        ...elementPlusZhLocale
    },
}

const i18n = createI18n({
    locale: 'zh',
    silentFallbackWarn: true,
    messages
})

export default i18n