<template>
  <div class="cards-slider-header">
        <h6>{{title}}</h6>
        <router-link :to="{name: 'category', params: { id }}">See all</router-link>
      </div>
      <div class="cards-slider-wrap">
        <div class="items">
          <CourseCard :title="'Present simple'" :level="1" :phrases="80" :background-color="backgroundColor" />
          <CourseCard :title="'Present simple'" :level="1" :phrases="80" :background-color="backgroundColor" />
          <CourseCard :title="'Present simple'" :level="1" :phrases="80" :background-color="backgroundColor" />
          <CourseCard :title="'Present simple'" :level="1" :phrases="80" :background-color="backgroundColor" />
          <CourseCard :title="'Present simple'" :level="1" :phrases="80" :background-color="backgroundColor" />
        </div>
      </div>
</template>

<script setup lang="ts">
import CourseCard from './CourseCard.vue';

withDefaults(defineProps<{
  title: string,
  id?: string | number,
  backgroundColor?: 'blue' | 'orange' | 'red' | 'green' | 'purple'
}>(), {
  backgroundColor: 'blue',
  id: 123
})
</script>

