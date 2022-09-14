import { defineConfig } from 'dumi';

const repo = 'rayr-note'; // 项目名

const path = process.env.NODE_ENV === 'production' ? `/${repo}/` : '/';

export default defineConfig({
    title: '黑白猪',
    mode: 'site',
    base: path,
    publicPath: path,
    logo: path + 'images/logo.jpg',
    navs: [
        {
            title: '文章列表',
            path: 'getting-started.md',
        },
        {
            title: '关于我',
            path: 'help.md',
        },
    ],
});