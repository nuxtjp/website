<script setup lang="ts">

const drawer = ref(false)
const open = ref(['NuxtJP'])

const navigation = useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})

const data = computed(() => navigation.data ? navigation.data.value?.slice(1): [])

</script>
<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar app primary>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <NuxtLink to="/">NuxtJP</NuxtLink>
        </v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
        :model-value="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          v-model:opened="open"
          nav
        >
          <v-list-group
            v-for="group, i in data"
            :key="i"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="group.title"
              ></v-list-item>
            </template>
            <v-list-item
              nav
              density="compact"
              v-for="item in group.children"
              :key="item.title + '-' + i"
              :title="item.title"
              :to="item.path"
              @click="drawer = false"
            ></v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container

        >
          <slot />
        </v-container>
      </v-main>
      <v-footer app>©NuxtJP 2025</v-footer>
    </v-app>
  </v-responsive>
</template>
