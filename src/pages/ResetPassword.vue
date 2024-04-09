<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="" role="button" @click.prevent="router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </a>
      <h3>Reset Password</h3>
    </div>
    <div class="form-body">
      <form action="api/auth/reset-password" method="POST" @submit.prevent="handleResetPassword">
        <div class="input-field">
          <label for="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            class="form-control"
            placeholder="Enter new password"
            v-model="newPassword"
          />
        </div>
        <div class="input-field">
          <label for="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            class="form-control"
            placeholder="Confirm new password"
            v-model="confirmNewPassword"
          />
        </div>
        <div class="forgot-pass">
          <input type="submit" class="btn" value="Reset" />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import ArrowLeftIcon from 'components/icons/arrow-left.svg';

defineOptions({
  name: 'ResetPassword',
});

const router = useRouter();

const newPassword = ref('');
const confirmNewPassword = ref('');

const handleResetPassword = () => {
  if (!newPassword.value || !confirmNewPassword.value) {
    toast('Please enter new password and confirm new password', {
      autoClose: 3000,
      type: 'error',
    })
  } else if (newPassword.value !== confirmNewPassword.value) {
    toast('New password and confirm new password do not match', {
      autoClose: 3000,
      type: 'error',
    })
  } else {
    console.log('Password Reset successful', {
      autoClose: 3000,
      type: 'success',
    })
  }
};
</script>


