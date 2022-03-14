<template>
  <section class="
    w-full
    h-screen
    flex
    flex-col
    items-center
    justify-center
    p-8
    bg-boom-blue
    text-white"
  >
    <h1 class="text-2rem font-semibold mb-4">
      {{ currentMainScreenTitle }} из Орла
    </h1>
    <div class="flex">
      <div class="flex rounded-lg bg-boom-blue-rgba">
        <button type="button" class="py-2 px-4">Туры к морю</button>
        <button type="button" class="py-2 px-4">Экскурсии</button>
      </div>
      <button type="button"
              class="ml-6 rounded-lg bg-boom-blue-rgba py-2 px-4"
      >
        Аренда автобуса
      </button>
    </div>
    <keep-alive>
      <component :is="currentComponents"></component>
    </keep-alive>
  </section>
</template>

<script>
import SearchSeaToursForm from './SearchSeaToursForm.vue';
import SearchExcursionsForm from './SearchExcursionsForm.vue';

export default {
  name: 'MainScreen',
  components: {
    SearchSeaToursForm,
    SearchExcursionsForm,
  },
  data() {
    return {
      currentComponents: 'SearchSeaToursForm',
      currentMainScreenTitle: 'Поиск автобусных туров к морю из Орла',
    };
  },
  methods: {
    toggleComponent(componentName) {
      this.currentMainScreenTitle = componentName === 'SearchSeaToursForm' ? 'Поиск автобусных туров к морю' : 'Поиск экскурсионных туров';
      this.currentComponents = componentName;
    },
  },
  mounted() {
    //
  },
};
</script>
