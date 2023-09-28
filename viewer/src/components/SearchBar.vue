<template>
  <v-card class="search-bar">
    <input id="search" type="text" placeholder="検索" />
  </v-card>
</template>
<style lang="scss">
.search-bar {
  margin-left: auto;
  box-shadow: none;
  height: 40px;
  width: 40%;
  margin: 50px;
  outline: solid;
  outline-width: 2px;
  outline-color: white;
}

.search-bar:hover {
  background-color: #e3edf7;
  box-shadow: 2px 2px 4px 0px rgba(114, 142, 171, 0.1), -6px -6px 20px 0px #fff,
    4px 4px 20px 0px rgba(111, 140, 176, 0.41);
  transition: all 1s ease-in-out;
  outline-width: 0px;
}

.search-bar:focus {
  outline: solid;
}

input {
  outline: solid;
  outline-color: red;
  text-align: left 10px;
}
</style>
