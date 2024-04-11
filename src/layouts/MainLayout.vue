<template>
  <section class="screen-wrapper">
    <div class="screen-header" v-if="backBtn">
      <q-btn flat round dense @click.prevent="$router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </q-btn>
      <h3>{{ title }}</h3>
    </div>
   <slot></slot>
    <div class="app-screen-footer">
      <div>
        <router-link to="/" active-class="active">
          <img :src="HomeIcon" alt="Home" />
        </router-link>
        <router-link to="/settings" active-class="active">
          <img :src="SettingsIcon" alt="Settings" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowLeftIcon from 'components/icons/arrow-left.svg';
import HomeIcon from 'components/icons/home.svg';
import SettingsIcon from 'components/icons/settings.svg';

defineOptions({
  name: 'SettingPage',
});

defineProps<{
  title?: string;
  backBtn: boolean;
}>();
</script>
