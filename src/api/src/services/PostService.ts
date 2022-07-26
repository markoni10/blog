import * as PostRepository from '../repository/PostRepository';

export const getAllPosts = async () => await PostRepository.getAllPosts();

export const getPostById = async (id: number) => await PostRepository.getPostById(id);