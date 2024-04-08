<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="javascript:void(0);" onclick="history.back()"
        ><img :src="ArrowLeftIcon" alt="Arrow Left"
      /></a>
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
        <form action="#">
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
import ArrowLeftIcon from 'components/icons/arrow-left.svg';

defineOptions({
  name: 'ForgotPassword',
});
</script>
