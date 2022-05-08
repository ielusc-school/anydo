<template>
  <div class="row">
  <div class="col-3">
    <button
      type="button"
      class="btn btn-outline-primary float-start"
      @click="createNewAccount">
        Adicionar
    </button>
  </div>
  <SectionName class="mt-4"/>
</div>
</template>

<script>
import SectionName from '@/components/commom/SectionName.vue';

export default {
  name: 'AccountCreate',
  components: {
    SectionName,
  },
  methods: {
    createNewAccount() {
      this.$router.push({ name: 'ap.NewAccount' });
    },
  },
};
</script>
