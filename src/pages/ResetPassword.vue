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

import { useQuasar } from 'quasar';
import ArrowLeftIcon from 'components/icons/arrow-left.svg';

const $q = useQuasar();

const showNotify = (message: string, type: 'positive' | 'negative' = 'negative') => {
  $q.notify({
    message: message,
    color: type,
    position: 'top',
    timeout: 1000,
  });
}

defineOptions({
  name: 'ResetPassword',
});

const router = useRouter();

const newPassword = ref('');
const confirmNewPassword = ref('');

const handleResetPassword = () => {
  if (!newPassword.value || !confirmNewPassword.value) {
    showNotify('Please enter new password and confirm new password')
  } else if (newPassword.value !== confirmNewPassword.value) {
   showNotify('New password and confirm new password do not match')
  } else {
    console.log('Password Reset successful')
    showNotify('Password Reset successful', 'positive');
    router.push('/login');
}
};
</script>


