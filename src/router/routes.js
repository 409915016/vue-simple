import showBlogs from "../components/showBlogs.vue";
import addBlog from "../components/addBlog.vue";
import singleBlog from "../components/singleBlog.vue";


export default [
  {
    path: '/',
    name: 'showBlogs',
    component: showBlogs
  },
  {
    path: '/add',
    name: 'addBlog',
    component: addBlog
  },
  {
    path: '/blog/:id',
    name: 'singleBlog',
    component: singleBlog
  }
]
