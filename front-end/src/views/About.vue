<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{query: {page: 1}}" class="btn btn-primary btn-block">
      1
    </router-link>
     <router-link :to="{query: {page: 2}}" class="btn btn-primary btn-block">
      2
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  watch: {
    "$route.query.page": {
      immediate: true,
      handler(page){
        console.log(`Page has changed: ${page}`)
      }
    }
  },
}
</script>