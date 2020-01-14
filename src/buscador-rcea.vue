<template>
  <div class="form-group mb-5">
    <slot name="message" v-bind:message="alertMessage">
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="alertType"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="dismissCountDown = $event"
        >{{ alertMessage }}</b-alert
      >
    </slot>
    <form v-on:submit.prevent="search()" class="control">
      <div class="search-wrapper">
        <input
          name="focus"
          required
          class="search-box"
          placeholder="Enter search term"
          v-model.trim="searchKey"
        />
        <button type="button" class="close-icon" @click="clear"></button>
      </div>
      <button
        type="submit"
        id="cvu-search-button"
        class="btn btn-success"
        :disabled="searchButtonDisabled()"
      >
        <font-awesome-icon icon="search"></font-awesome-icon>&nbsp;
      </button>
    </form>
  </div>
</template>
<script lang="ts" src="./buscador-rcea.component.ts"></script>
<style>
.search-box,
.close-icon,
.search-wrapper {
  position: relative;
  padding: 10px;
}
.search-wrapper {
  width: 80%;
  margin: auto;
  margin-top: 30px;
}
.search-box {
  width: 80%;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 15px;
  max-width: 500%;
  text-align: center;
}
.close-icon {
  border: 1px solid transparent;
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.close-icon:after {
  content: "X";
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: #fa9595;
  z-index: 1;
  right: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-weight: normal;
  font-size: 12px;
  box-shadow: 0 0 2px #e50f0f;
  cursor: pointer;
}
.search-box:not(:valid) ~ .close-icon {
  display: none;
}
.control {
  display: flex;
  align-items: center;
}
.btn-success {
  margin-top: 10%;
  width: 40%;
  position: static;
  margin-left: -15%;
}
</style>
