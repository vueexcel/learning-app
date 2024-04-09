<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="" role="button" @click.prevent="router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </a>
      <h3>Forgot Password?</h3>
    </div>
    <div class="wrapper-vertical-center">
      <div class="forgot-password-note">
        <p>
          Don’t worry! it happens. Please enter E-mail associated with your
          account
        </p>
      </div>
      <div class="form-body py-0">
        <form action="api/auth/forgot" method="POST" enctype="multipart/form-data" @submit.prevent="handleForgotPassword">
          <div class="input-field">
            <label for="email">Enter your E-mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              placeholder="user@gmail.com"
            />
          </div>
          <div class="forgot-pass">
            <input type="submit" class="btn" value="Get" />
          </div>
        </form>
      </div>
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
  name: 'ForgotPassword',
});

const router = useRouter();
const email = ref('');

const handleForgotPassword = () => {
  if (!email.value) {
    toast('Please enter your email', {
      autoClose: 3000,
      type: 'error',
    })
  } else {
    console.log('Login Successful', {
      autoClose: 3000,
      type: 'success',
    })
  }
};

</script>
