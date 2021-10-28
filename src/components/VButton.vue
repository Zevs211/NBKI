<template>
  <div
    type="button"
    class="
      flex
      justify-center
      px-4
      py-1
      text-xl
      rounded
      shadow
      cursor-pointer
      select-none
      bg-gray-400
      hover:bg-gray-400
      active:bg-gray-300
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>