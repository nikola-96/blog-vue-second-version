<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/posts">Posts</router-link>|
            <router-link to="/add">Create Post</router-link>
          </div>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
