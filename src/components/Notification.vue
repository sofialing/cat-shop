<template>
  <transition appear-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div class="notification">
      <button class="delete" @click="$emit('clicked')"></button>
      {{message}}.
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>