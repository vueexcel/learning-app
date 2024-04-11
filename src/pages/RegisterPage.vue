<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <h3>Registration</h3>
    </div>
    <div class="form-body">
      <form action="api/auth/register" method="POST" enctype="multipart/form-data" @submit.prevent="handleRegister">
        <div class="input-field">
          <label for="name">Enter your Name</label>
          <input type="text" id="name" class="form-control" placeholder="Your name" v-model="name" />
        </div>
        <div class="input-field">
          <label for="email">Enter your E-mail</label>
          <input type="text" id="email" class="form-control" placeholder="user@gmail.com" v-model="email" />
        </div>
        <div class="input-field">
          <label for="password">Enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input id="password-field" type="password" class="form-control" name="password" value=""
              placeholder="Enter password" v-model="password" />
            <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
          </div>
        </div>
        <div class="input-field">
          <label for="re-pass">Re-enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input id="password-field" type="password" class="form-control" name="re-pass" placeholder="Enter password"
              v-model="rePassword" />
            <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
          </div>
        </div>
        <div class="forgot-pass">
          <input type="submit" class="btn" value="Register" />
        </div>
        <div class="create-account">
          <h6>Already have an account??</h6>
          <h6><router-link to="/login">Login Here</router-link></h6>
        </div>
        <div class="or-para">
          <p>Or</p>
        </div>
        <div class="social-links">
          <a href="#" role="button" @click.prevent="onGoogleLogin"><img :src="GoogleIcon" alt="Google" /></a>
          <a href="#" role="button" @click.prevent="onAppleLogin"><img :src="AppleIcon" alt="Apple" /></a>
          <a href="#" role="button" @click.prevent="onFacebookLogin"><img :src="FacebookIcon" alt="Facebook" /></a>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

import GoogleIcon from 'components/icons/google.svg';
import FacebookIcon from 'components/icons/facebook.svg';
import AppleIcon from 'components/icons/apple.svg';
import { SERVER_URL } from 'src/constants';

const router = useRouter()
const $q = useQuasar();

defineOptions({
  name: 'RegisterPage',
});

const onGoogleLogin = () => {
  console.log('Google Login');
};

const onAppleLogin = () => {
  console.log('Apple Login');
};

const onFacebookLogin = () => {
  console.log('Facebook Login');
};

const name = ref('');
const email = ref('');
const password = ref('');
const rePassword = ref('');

const showNotify = (message: string, type: 'positive' | 'negative' = 'negative') => {
  $q.notify({
    message: message,
    color: type,
    position: 'top',
    timeout: 1000,
  });
}


const handleRegister = () => {
  if (!name.value) {
    showNotify('Please enter your name');
  }
  else if (!email.value) {
    showNotify('Please enter your email');
  }
  else if (!password.value) {
    showNotify('Please enter your password');
  }
  else if (!rePassword.value) {
    showNotify('Please re-enter your password');
  }

  else if (password.value !== rePassword.value) {
    showNotify('Passwords do not match');
  }

  else {
    axios.post(`${SERVER_URL}/api/register`, {
      name: name.value,
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);
      if(response.data.status === 'success') {
          showNotify('Registration Successful', 'positive');
          router.push('/login');
      }
    })
    .catch((error) => {
      console.log(error.response.data.errors.email);
        showNotify(error.response.data.errors.email);
    });
  };
}
</script>
