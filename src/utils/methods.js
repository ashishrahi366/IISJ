import { blogsData } from '../constants/blogsData';

export const relatedBlogs = (blogsData, blog) => {
    const blogs = blogsData
        .filter((item) => item.id !== blog.id)
        .slice(0, 3);
    return blogs;
};

export const getBlogsByIds = (ids) =>
    blogsData.filter((blog) =>
        ids.includes(blog.id)
    );
