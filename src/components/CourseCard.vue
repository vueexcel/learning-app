<template>
<a href="level.html" class="item">
            <div class="single-card single-card-blue">
              <h6>
                {{ title }} <br />
                <b>level {{ level }}</b>
              </h6>
              <p>Phrases: {{ phrases }}</p>
            </div>
          </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  level: number,
  phrases: number
}>()
</script>
