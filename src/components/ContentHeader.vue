<template>
  <div class="content_header">
    <div class="content_header--container">
      <div class="content_header--left">
        <slot name="left"></slot>
      </div>
      <div class="content_header--right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.content_header {
  background-color: #042331;
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 18px 18px 0 0;
}

.content_header--container {
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  margin: auto 0;
  padding: 0 50px;
}

.content_header--left {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
}

.content_header--right {
  display: flex;
  align-items: center;
}
</style>
