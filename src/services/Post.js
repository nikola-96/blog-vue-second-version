import { HTTP } from './BaseServices'

export default class PostService {
    async getAll() {
        const response = await HTTP.get('/posts');

        return response.data;
    }
    async getSingle(id) {
        const response = await HTTP.get(`/posts/${id}`);

        return response.data;
    }
    async post(post) {
        await HTTP.post('/posts', post);

    }

}
export const postService = new PostService(); 