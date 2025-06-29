<script setup lang="ts">
const drawer = ref(false)
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})
</script>
<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>NuxtJP</v-toolbar-title>
        <!--
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        -->
      </v-app-bar>
      <v-navigation-drawer
        app
        :model-value="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="data"
        ></v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
      <v-footer app>©NuxtJP 2025</v-footer>
    </v-app>
  </v-responsive>
</template>
