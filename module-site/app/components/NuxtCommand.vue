<script setup lang="ts">
const props = defineProps<{ command: string; label?: string }>()
const site = useLocalizedSite()
const state = ref<'idle' | 'copied' | 'failed'>('idle')
watch(() => props.command, () => { state.value = 'idle' })
async function copy() {
  try {
    await navigator.clipboard.writeText(props.command)
    state.value = 'copied'
  } catch { state.value = 'failed' }
}
const message = computed(() => state.value === 'copied'
  ? (site.locale.value === 'ja' ? 'コピーしました' : 'Copied')
  : state.value === 'failed' ? (site.locale.value === 'ja' ? 'コードを選択してコピーしてください' : 'Select and copy the code') : '')
</script>

<template>
  <div class="nj-command">
    <div class="nj-command-heading"><span>{{ label ?? 'Terminal' }}</span><button type="button" :aria-label="site.locale.value === 'ja' ? 'コマンドをコピー' : 'Copy command'" @click="copy">{{ state === 'copied' ? '✓' : 'Copy' }}</button></div>
    <pre><code>{{ command }}</code></pre>
    <span class="nj-copy-message" role="status">{{ message }}</span>
  </div>
</template>
