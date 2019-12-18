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
    <form v-on:submit.prevent="search()">
      <div class="search-wrapper">
        <input
          type="text"
          name="focus"
          required
          class="search-box"
          placeholder="Enter search term"
          v-model.trim="searchKey"
          v-on:keyup.enter="search()"
        />
        <button class="close-icon" @click="clear"></button>
      </div>
      <button
        type="submit"
        id="cvu-search-button"
        class="btn btn-success"
        :disabled="searchButtonDisabled()"
      >
        <font-awesome-icon icon="search"></font-awesome-icon>&nbsp;
        <span v-if="!isSearching">Buscar</span>
        <span v-else>Buscando...</span>
      </button>
    </form>
  </div>
</template>
<script lang="ts" src="./buscador-rcea.component.ts"></script>
<style>
body {
  background-color: #f1f1f1;
  font-family: Helvetica, Arial, Verdana;
}
.redfamily {
  color: red;
}
.search-box,
.close-icon,
.search-wrapper {
  position: relative;
  padding: 10px;
}
.search-wrapper {
  width: 500px;
  margin: auto;
  margin-top: 50px;
}
.search-box {
  width: 80%;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 15px;
}
.search-box:focus {
  box-shadow: 0 0 15px 5px #b0e0ee;
  border: 2px solid #bebede;
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
  right: 35px;
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
.search-box {
  width: 300px;
}
</style>
