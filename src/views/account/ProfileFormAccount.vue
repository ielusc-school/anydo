<template>
<div class="mt-4">
 <SectionName
    titleSection="Account"
  />
  <div class="row">
    <div class="col-4">
      <label for="fieldName" class="form-label">Name
      <span class="text-danger">*</span>
      <input
        v-model="form.name"
        type="text"
        class="form-control"
        id="fieldName"
        placeholder="Joe Doe"
        >
      </label>
       <div class="text-danger" v-if="requiredFieldName">
        Required field is cannot empty.
      </div>
    </div>
    <div class="col-4">
      <label for="fieldUser" class="form-label">Username
      <span class="text-danger">*</span>
        <input
          v-model="form.username"
          type="text"
          class="form-control"
          id="fieldUser"
          placeholder="joe.doe"
          >
      </label>
       <div class="text-danger fw-lighter" v-if="requiredFieldUsername">
        Required field is cannot empty.
      </div>
    </div>
    <div class="col-4">
      <label for="fieldEmail" class="form-label">Email
      <span class="text-danger">*</span>
      <input
        v-model="form.email"
        type="text"
        class="form-control"
        id="fieldEmail"
        placeholder="joe.doe@gmail.com"
      >
      </label>
       <div class="text-danger" v-if="requiredFieldEmail">
        Required field is cannot empty.
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SectionName from '@/components/commom/SectionName.vue';

export default {
  name: 'ProfileFormAccount',
  components: {
    SectionName,
  },
  data() {
    return {
      form: {
        name: '',
        username: '',
        email: '',
      },
      requiredFieldName: false,
      requiredFieldUsername: false,
      requiredFieldEmail: false,
    };
  },
  watch: {
    form: {
      handler() {
        this.hasEnableForm();
      },
      deep: true,
    },
  },
  methods: {
    hasEnableForm() {
      const isActiveButtonForm = !(this.form.name && this.form.username && this.form.email);
      this.setErrorMessage();
      this.setAccountData();
      this.$emit('onEnableCreateAccount', isActiveButtonForm);
    },
    setErrorMessage() {
      this.requiredFieldName = !this.form.name;
      this.requiredFieldUsername = !this.form.username;
      this.requiredFieldEmail = !this.form.email;
    },
    setAccountData() {
      const account = {
        name: this.form.name,
        username: this.form.username,
        email: this.form.email,
      };
      this.$emit('onCreateUser', account);
    },
  },
};
</script>
