<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/posts">Posts</router-link>
  </div>
</template>
<script>
import { postService } from "@/services/PostService.js";

export default {
  name: "Navbar"
};
</script>