import { HTTP } from './BaseServices'

export default class PostService {
    async getAll() {
        const response = await HTTP.get('/posts');

        return response.data;
    }
    async getSingle(id) {
        const response = await HTTP.get(`/post/${id}`);

        return response.data;
    }

}
export const postService = new PostService() 