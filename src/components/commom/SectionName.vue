<template>
  <div class="row">
    <div class="col">
      <p class="fs-3 float-start mb-1">
        {{titleSection}}
      </p>
    </div>
    <div class="divider-line"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionName',
  props: {
    titleSection: {
      type: String,
    },
  },
};
</script>

<style>
  .divider-line {
    border-bottom:1px solid #0B5ED7;
    margin-bottom: 10px;
  }
</style>
