import axios from 'redaxios';

async function loaderDelayFn<T>(fn: (...args: Array<unknown>) => Promise<T> | T) {
  const delay = Number(sessionStorage.getItem('loaderDelay') ?? 0);
  const delayPromise = new Promise((r) => setTimeout(r, delay));

  await delayPromise;
  const res = await fn();

  return res;
}

type Post = {
  id: number;
  title: string;
  body: string;
};

let posts: Array<Post> = null!;

let postsPromise: Promise<void> | undefined = undefined;

const ensurePosts = async () => {
  if (!postsPromise) {
    postsPromise = Promise.resolve().then(async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = data.slice(0, 10);
    });
  }

  await postsPromise;
};

export async function fetchPosts() {
  return loaderDelayFn(() => ensurePosts().then(() => posts));
}

export async function fetchPostById(id: number) {
  return loaderDelayFn(() =>
    ensurePosts().then(() => {
      const post = posts.find((d) => d.id === id);
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    }),
  );
}
