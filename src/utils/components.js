import card from "@/components/common/card.vue";
import ddd from "@/components/common/ddd.vue";




function install(Vue) {
    Vue.component("card",card);
    Vue.component("ddd",ddd);
};

export default install;