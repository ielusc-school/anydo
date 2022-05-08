<template>
<div>
 <SectionName class="mt-5"/>
  <div class="row mt-2">
  <div class="col-6">
    <button
      type="button"
      class="btn btn-warning float-start"
      @click="backToHome">Cancelar
    </button>
  </div>

  <div class="col-6">
    <button
      type="submit"
      class="btn btn-primary float-end"
      :disabled="hasFormFilled"
      >Adicionar
    </button>
  </div>
  </div>
</div>
</template>
<script>
import SectionName from '@/components/commom/SectionName.vue';

export default {
  name: 'FooterFormAccount',
  components: {
    SectionName,
  },
  props: {
    hasFormFilled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    goToAccount() {
      this.$emit('onSubmitAction');
    },

    backToHome() {
      this.$router.push('/');
    },
  },
};
</script>
