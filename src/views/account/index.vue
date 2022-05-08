<template>
<div>
  <div class="container">
    <form @submit.prevent="setUser">
      <ProfileFormAccount
        @onEnableCreateAccount="handleCreateAccount"
        @onCreateUser="createAccountUser"
      />
      <AddressFormAccount />
      <FooterFormAccount
        :hasFormFilled="hasFormFilled"
        @onSubmitAction="createAccountUser"
      />
    </form>
  </div> <!-- /container-->
</div>
</template>

<script>
import ProfileFormAccount from './ProfileFormAccount.vue';
import AddressFormAccount from './AddressFormAccount.vue';
import FooterFormAccount from './FooterFormAccount.vue';

export default {
  name: 'TaskPage',
  components: {
    ProfileFormAccount,
    AddressFormAccount,
    FooterFormAccount,
  },
  data() {
    return {
      hasFormFilled: true,
      account: {},
      address: {},
    };
  },
  methods: {
    handleCreateAccount(status) {
      this.hasFormFilled = status;
    },
    createAccountUser(dataUser) {
      this.account = dataUser;
    },
    createAddressUser(addressUser) {
      this.address = addressUser;
      this.setUser(addressUser);
    },
    setUser() {
      localStorage.setItem('user', JSON.stringify(this.account));
      this.$router.push({ name: 'ap.tasks' });
    },
  },
};
</script>
