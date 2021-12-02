<template>
    <section class="modal">
      <div class="modal-sucesso">
        <slot></slot>
      </div>
    </section>
</template>

<style>

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 1;
    opacity:1;
    pointer-events: none;
    text-align: center;
    padding: 0px 10px;
}

.modal-sucesso {
  color: #13ac13;
  background: #a9eca9;
}

.modal > div {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  padding: 40px 40px;
}

.modal:before {
  display: inline-block;
  vertical-align: middle;
  content: " ";
  height: 100%;
}
</style>