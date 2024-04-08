<template>
  <section class="screen-wrapper">
    <div class="lesson-page-header">
      <a href="#close-lesson"><img :src="CrossIcon" alt="Cross" /></a>
      <div class="progress-bar-top">
        <span></span>
        <em style="width: 165px"></em>
      </div>
    </div>
    <div class="lesson-page-body">
      <div class="lesson-text-block">
        <div class="lesson-paras">
          <h2>Она любит покупать продукты в магазине</h2>
          <h2 id="english-phrase">She likes to buy groceries at the store</h2>
        </div>
        <div class="mute-slow">
          <a href="javascript:void(0)"><img :src="AudioIcon" alt="Audio" /></a>
          <a href="javascript:void(0)"
            ><img :src="SoundSlowIcon" alt="Slow Audio"
          /></a>
        </div>
      </div>
    </div>
    <div class="lesson-page-body lpb2">
      <div class="control-bar-block">
        <div class="progress-bar-bottom">
          <span></span>
          <em id="gradient-bar"></em>
        </div>
        <div class="audio-control">
          <a href="javascript:void(0);"
            ><img :src="AngleLeftIcon" alt="Angle Left"
          /></a>
          <a href="javascript:void(0);"><img :src="PauseIcon" alt="Pause" /></a>
          <a href="javascript:void(0);"
            ><img :src="AngleRightIcon" alt="Angle Right"
          /></a>
        </div>
        <div class="lesson-footer">
          <a href="#change-level"
            ><img :src="VolumeControlIcon" alt="Volume Control"
          /></a>
          <a href="#report-error"><img :src="ErrorIcon" alt="Error" /></a>
          <a href="rules.html"><img :src="QuestionIcon" alt="Question" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CrossIcon from 'components/icons/cross.svg';
import AudioIcon from 'components/icons/audio.svg';
import SoundSlowIcon from 'components/icons/sound-slow.svg';
import AngleLeftIcon from 'components/icons/angle-left.svg';
import PauseIcon from 'components/icons/pause.svg';
import AngleRightIcon from 'components/icons/angle-right.svg';
import VolumeControlIcon from 'components/icons/volume-control.svg';
import ErrorIcon from 'components/icons/error.svg';
import QuestionIcon from 'components/icons/question.svg';

defineOptions({
  name: 'LessonPage',
});
</script>
