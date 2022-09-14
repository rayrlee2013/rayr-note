import { defineConfig } from 'dumi';

const repo = 'rayr-note'; // 项目名

const path = process.env.NODE_ENV === 'production' ? `/${repo}/` : '/';

export default defineConfig({
    title: '黑白猪',
    mode: 'site',
    base: path,
    publicPath: path,
    logo: '/images/logo.jpg'
});