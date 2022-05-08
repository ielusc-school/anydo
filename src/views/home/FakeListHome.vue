<template>
  <div class="row">
    <div class="col-3">
      <ul
        class="list-unstyled"
        v-for="task in tasks"
        :key="task">
        <li>
          <label class="form-check-label" for="flexCheckDefault">
          <input class="form-check-input" type="checkbox">
          {{task}}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FakeListHome',
  data() {
    return {
      tasks: [
        'Supermercados fazer compras',
        'Casa, arrumar mudanças',
        'Computador, organizar SO',
      ],
    };
  },
};
</script>
