<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}


</style>