<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <h3>Registration</h3>
    </div>
    <div class="form-body">
      <form action="#">
        <div class="input-field">
          <label for="name">Enter your Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Your name"
          />
        </div>
        <div class="input-field">
          <label for="email">Enter your E-mail</label>
          <input
            type="text"
            id="email"
            class="form-control"
            placeholder="user@gmail.com"
          />
        </div>
        <div class="input-field">
          <label for="password">Enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input
              id="password-field"
              type="password"
              class="form-control"
              name="password"
              value=""
              placeholder="Enter password"
            />
            <span
              toggle="#password-field"
              class="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>
        </div>
        <div class="input-field">
          <label for="re-pass">Re-enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input
              id="password-field"
              type="password"
              class="form-control"
              name="re-pass"
              value=""
              placeholder="Enter password"
            />
            <span
              toggle="#password-field"
              class="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>
        </div>
        <div class="forgot-pass">
          <input type="submit" class="btn" value="Register" />
        </div>
        <div class="create-account">
          <h6>Already have an account??</h6>
          <h6><a href="index.html">Login Here</a></h6>
        </div>
        <div class="or-para">
          <p>Or</p>
        </div>
        <div class="social-links">
          <a href="#"><img :src="GoogleIcon" alt="Google" /></a>
          <a href="#"><img :src="AppleIcon" alt="Apple" /></a>
          <a href="#"><img :src="FacebookIcon" alt="Facebook" /></a>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import GoogleIcon from 'components/icons/google.svg';
import FacebookIcon from 'components/icons/facebook.svg';
import AppleIcon from 'components/icons/apple.svg';

defineOptions({
  name: 'RegisterPage',
});
</script>
