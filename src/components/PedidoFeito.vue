<template>
    <div class="modal">
      <div>
        <slot></slot>
      </div>
    </div>
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
    color: #13ac13;
    text-align: center;
}

.modal > div {
    border-radius: 10px;
    width: 400px;
    position: relative;
    margin: 10% auto;
    padding: 100px 20px;
    background: #a9eca9;
}
</style>