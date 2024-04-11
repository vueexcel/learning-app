<template>
  <router-link :to="{ name: page , params: { id: 1 } }" :class="addClass ? 'single-card single-card-' + backgroundColor : 'item'">
    <div :class="addClass ? '' : 'single-card single-card-' + backgroundColor">
      <h6>
        {{ title }}
        <br v-if="title" />
        <b v-if="level !== undefined">level {{ level }}</b>
      </h6>
      <p>Phrases: {{ phrases }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string,
  level?: number,
  phrases: number,
  addClass?: boolean,
  page?: 'course' | 'rules',
  backgroundColor?: 'blue' | 'orange' | 'red' | 'green' | 'purple'
}>(), {
  page: 'course'
})
</script>
