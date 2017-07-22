import showBlogs from "../components/showBlogs.vue";
import addBlog from "../components/addBlog.vue";


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
  }
]
