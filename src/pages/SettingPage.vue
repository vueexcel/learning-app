<template>
  <main-layout :title="'Settings'" back-btn>
    <section class="settings-wrapper">
      <div class="settings-header">
        <div class="setting-header-left">
          <div class="avatar">
            <img :src="AvatarIcon" alt="Avatar" />
          </div>
          <div>
            <h5>Etech</h5>
            <p>Connected Via Google</p>
          </div>
        </div>
        <a href="javascript:void(0)">
          <img :src="ArrowRightIcon" alt="Arrow Right"/>
        </a>
      </div>
      <div class="setting-items">
        <a href="javascript:void(0);" class="setting-item">
          <img :src="SubscriptionIcon" alt="Subscription" />
          <p>Subscription</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="InstagramIcon" alt="Instagram" />
          <p>Instagram</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="SupportIcon" alt="Support" />
          <p>Support</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="TeamIcon" alt="team" />
          <p>Team & Privacy</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="ShareIcon" alt="Share" />
          <p>Share with friends</p>
        </a>
      </div>
    </section>
  </main-layout>
</template>

<script setup lang="ts">
import AvatarIcon from 'components/icons/avatar.svg';
import ArrowRightIcon from 'components/icons/arrow-right.svg';
import SubscriptionIcon from 'components/icons/subscription.svg';
import InstagramIcon from 'components/icons/instagram.svg';
import SupportIcon from 'components/icons/support.svg';
import TeamIcon from 'components/icons/team.svg';
import ShareIcon from 'components/icons/share.svg';


import MainLayout from 'src/layouts/MainLayout.vue';



defineOptions({
  name: 'SettingPage',
});
</script>
