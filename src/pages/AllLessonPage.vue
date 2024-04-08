<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="javascript:void(0);" onclick="history.back()"
        ><img :src="ArrowLeftIcon" alt="Arrow Left"
      /></a>
      <h3>A1 Beginner</h3>
    </div>
    <div class="cards-wrapper">
      <a href="lesson.html" class="single-card single-card-blue">
        <h6>Present simple</h6>
        <p>Phrases: 80</p>
      </a>
      <a href="lesson.html" class="single-card single-card-blue">
        <h6>Future simple</h6>
        <p>Phrases: 80</p>
      </a>
      <a href="lesson.html" class="single-card single-card-blue">
        <h6>Present simple</h6>
        <p>Phrases: 80</p>
      </a>
      <a href="lesson.html" class="single-card single-card-blue">
        <h6>Future simple</h6>
        <p>Phrases: 80</p>
      </a>
    </div>
    <div class="app-screen-footer">
      <div>
        <a href="#"><img :src="HomeIcon" alt="Home" /></a>
        <a href="#"><img :src="SettingsIcon" alt="Settings" /></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeIcon from 'components/icons/home.svg';
import SettingsIcon from 'components/icons/settings.svg';
import ArrowLeftIcon from 'components/icons/arrow-left.svg';

defineOptions({
  name: 'AllLessonPage',
});
</script>
