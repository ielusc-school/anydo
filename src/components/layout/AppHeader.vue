<template>
<div class="space-pbt__30">
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        AnyDo |
        <span class="fs-6 fst-italic">
          Manager Tasks
        </span>
      </router-link>
      <router-link to="/nova-conta">
        <span class="text-white">
          Hello, {{setName()}}
        </span>
      </router-link>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      user: '',
    };
  },
  computed: {
    // showPreviewName() {
    //   return this.user !== '' ? this.user : 'Visitors';
    // },
  },
  mounted() {
    this.setName();
  },
  methods: {
    setName() {
      return this.user !== '' ? this.user : 'Visitors';
    },
    getName() {
      // recuper localStorage ou exibir default
    },
  },
};
</script>

<style>
 a {
   text-decoration: none;
 }
</style>
