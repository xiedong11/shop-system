import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index'

const i18n = createI18n({
    fallbackLocale: 'ch',
    globalInjection:true,
    legacy: false, // you must specify 'legacy: false' option
    locale: "ch",
    messages,
});

export default i18n;
