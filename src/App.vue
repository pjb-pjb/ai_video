<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
    methods:{
    },
    mounted(){
      this.$store.state.isOpen = true;
    }
}
</script>

<style lang="scss">
*{
	margin: 0;
	padding: 0;
  font-family: "MicrosoftYaHei";
  box-sizing: border-box;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
b,i,em,strong,h1,h2,h3,h4,h5,h6{
	font-style: normal;
	font-weight: normal;
}

</style>
