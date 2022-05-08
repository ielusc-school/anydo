<template>
<div class="container">
  <SectionName
    titleSection="Tasks"
  />
  <FakeList
  />
  <AccountCreate
  />
</div>
</template>

<script>
import SectionName from '@/components/commom/SectionName.vue';
import AccountCreate from './AccountCreate.vue';
import FakeList from './FakeListHome.vue';

export default {
  name: 'HomeView',
  components: {
    SectionName,
    AccountCreate,
    FakeList,
  },
};
</script>
