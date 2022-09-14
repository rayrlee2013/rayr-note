import { defineConfig } from 'dumi';

const repo = 'rayr-note'; // 项目名

export default defineConfig({
    title: 'Site Name',
    mode: 'site',
    base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
    publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});