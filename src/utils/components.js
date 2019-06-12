import card from "@/components/common/card.vue";
import ddd from "@/components/common/ddd.vue";
import liveplayer from "@/components/common/liveplayer.vue";





function install(Vue) {
    Vue.component("card",card);
    Vue.component("ddd",ddd);
    Vue.component("mVideo",liveplayer);
};

export default install;