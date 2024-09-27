<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyComponent",
  props: {
    message: { type: String, required: true },
  },
  emits: ["messageChanged"],
  setup() {},
});
</script>
<template>
  <div>
    <h1>This is your component!</h1>
    <div>
      <p data-test-message>{{ message }} !!</p>
    </div>
  </div>
</template>
<style lang="css">
  
</style>
