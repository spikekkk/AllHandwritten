import { defineConfig } from "vite"
import path from "path"
import checker from "vite-plugin-checker"
export default defineConfig({
    // 指定项目的根目录，默认是 process.cwd()
    root: "./src", // 如果 index.ts 在 src 目录下，可以这样设置
    base: "./", // 设置为相对路径
    // 设置开发服务器选项
    server: {
        port: 3000,
        open: "/index.html",
    },

    // 构建配置
    build: {
        // 设置输出目录
        outDir: "dist",
        // 指定入口文件
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/index.ts"),
            },
        },
    },

    // 解析选项
    resolve: {
        alias: {
            // 使用别名简化路径
            "@": path.resolve(__dirname, "src"),
        },
    },

    // 插件配置
    plugins: [
        checker({
            typescript: true, // 启用 TypeScript 类型检查
        }),
    ],
})
