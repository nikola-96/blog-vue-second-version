<template>
  <div>
    <form-post :handleSubmit="handleSubmit" />
  </div>
</template>
<script>
import FormPost from "./FormPost";
import PostList from "@/components/PostList.vue";
import { postService } from "@/services/Post.js";

export default {
  components: { FormPost },
  methods: {
    handleSubmit(post) {
      this.sendPost(post);
    },
    async sendPost(post) {
      await postService.post(post);
      this.$router.push("/posts");
    }
  }
};
</script>