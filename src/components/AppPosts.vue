<template>
  <div>
    <div>
      <PostList :posts="posts" />
    </div>
  </div>
</template>
<script>
import { postService } from "@/services/Post.js";
import PostList from "@/components/PostList.vue";

export default {
  components: { PostList },
  name: "AppPosts",
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.posts = await postService.getAll();
  }
};
</script>