<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="javascript:void(0);" onclick="history.back()"
        ><img :src="ArrowLeftIcon" alt="Arrow Left"
      /></a>
      <h3>Settings</h3>
    </div>
    <section class="settings-wrapper">
      <div class="settings-header">
        <div class="setting-header-left">
          <div class="avatar">
            <img :src="AvatarIcon" alt="Avatar" />
          </div>
          <div>
            <h5>{{store.user}}</h5>
            <p>Connected Via Google</p>
          </div>
        </div>
        <a href="javascript:void(0)"
          ><img :src="ArrowRightIcon" alt="Arrow Right"
        /></a>
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
    <div class="app-screen-footer">
      <div>
        <a href="#"><img :src="HomeIcon" alt="Home" /></a>
        <a href="#"><img :src="SettingsIcon" alt="Settings" /></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowLeftIcon from 'components/icons/arrow-left.svg';
import AvatarIcon from 'components/icons/avatar.svg';
import ArrowRightIcon from 'components/icons/arrow-right.svg';
import SubscriptionIcon from 'components/icons/subscription.svg';
import InstagramIcon from 'components/icons/instagram.svg';
import SupportIcon from 'components/icons/support.svg';
import TeamIcon from 'components/icons/team.svg';
import ShareIcon from 'components/icons/share.svg';
import HomeIcon from 'components/icons/home.svg';
import SettingsIcon from 'components/icons/settings.svg';
import { useUserStore } from 'src/stores/useUserStore';

const store = useUserStore();

defineOptions({
  name: 'SettingPage',
});
</script>
