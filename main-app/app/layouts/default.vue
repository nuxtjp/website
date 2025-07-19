<script setup lang="ts">

const links = [
  '始める',
  '詳しく調べる',
  'TIPS'
]

const stacks = [
  {
    'JavaScript': [
      'VueJS',
      'ReactJS'
    ],
    'FrameWork': [
      'NextJS',
      'NuxtJS'
    ],

  }

]

</script>
<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
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
        <slot />
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
