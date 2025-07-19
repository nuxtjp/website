<script setup lang="ts">

const drawer = ref(false)
const open = ref(['NuxtJP'])

const navigation = useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})

const data = computed(() => navigation.data ? navigation.data.value?.slice(1): [])

const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>
<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list
                rounded="lg"
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
                  ></v-list-item>
                </v-list-group>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-8"
            >
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <v-spacer></v-spacer>
      ©2025 NuxtJP
    </v-footer>
  </v-app>
</template>
