<template>
<div class="mt-4">
 <SectionName
    titleSection="Address"
  />
  <div class="row mt-4">
    <div class="col-3">
      <label for="fieldName" class="form-label">Cep
        <input
          v-model="form.zipcode"
          type="text"
          class="form-control"
          id="fieldName"
          placeholder="">
      </label>
    </div>
    <div class="col-3">
      <label for="fieldUser" class="form-label">Rua
        <input
        v-model="form.street"
          type="text"
          class="form-control"
          id="fieldUser"
          placeholder="">
      </label>
    </div>
    <div class="col-3">
      <label for="fieldEmail" class="form-label">Número
        <input
          v-model="form.number"
          type="text"
          class="form-control"
          id="fieldEmail"
          placeholder="">
      </label>
    </div>
    <div class="col-3">
      <label for="fieldEmail" class="form-label">Complemento
        <input
          v-model="form.complement"
          type="text"
          class="form-control"
          id="fieldEmail"
          placeholder="">
      </label>
    </div>
  </div>
   <div class="row mt-4">
    <div class="col-3">
      <label for="fieldName" class="form-label">Bairro
        <input
          v-model="form.burgh"
          type="text"
          class="form-control"
          id="fieldName"
          placeholder="">
      </label>
    </div>
     <div class="col-3">
      <label for="fieldName" class="form-label">Cidade
        <input
          v-model="form.city"
          type="text"
          class="form-control"
          id="fieldName"
          placeholder="">
      </label>
    </div>
     <div class="col-3">
      <label for="fieldName" class="form-label">Estado
        <input
          v-model="form.state"
          type="text"
          class="form-control"
          id="fieldName"
          placeholder="">
      </label>
    </div>
  </div>
</div>
</template>

<script>
import SectionName from '@/components/commom/SectionName.vue';

export default {
  name: 'AddressFormAccount',
  components: {
    SectionName,
  },
  data() {
    return {
      form: {
        zipcode: '',
        street: '',
        number: '',
        complement: '',
        burgh: '',
        city: '',
        state: '',
      },
    };
  },
};
</script>
