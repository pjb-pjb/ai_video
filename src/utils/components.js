import card from "@/components/common/card.vue";
import ddd from "@/components/common/ddd.vue";
import liveplayer from "@/components/common/liveplayer.vue";
import videoBox from "@/components/common/video-box.vue";





function install(Vue) {
    Vue.component("card",card);
    Vue.component("ddd",ddd);
    Vue.component("mVideo",liveplayer);
    Vue.component("videoBox",videoBox);
};

export default install;