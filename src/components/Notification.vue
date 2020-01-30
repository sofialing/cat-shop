<template>
  <div class="notification">
    <button class="delete" @click="$emit('clicked')"></button>
    {{message}}.
  </div>
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