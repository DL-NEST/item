import { spawn } from "child_process";
import { build, createServer } from "vite";
import electron from "electron";

// 编译主进程
async function buildMain() {
  let ele = null;
  const env = Object.assign(process.env, {
    VITE_DEV_SERVER_HOST: "host",
    VITE_DEV_SERVER_PORT: "3308",
  });
  // 编译主进程
  await build({
    configFile: "src/electron/vite.config.ts",
  });
  // await build({
  //   configFile: "src/preload/vite.config.ts",
  // });
  // 检查服务是否启动
  // 启动electron
  ele = spawn(electron, [".","--trace-warnings"], {
    stdio: "inherit",
    env,
  });
}

// 启动渲染进程
async function startServer() {
  // 创建vite服务
  const server = await createServer({
    configFile: "src/render/vite.config.ts",
  });
  // 启动vite服务
  await server.listen(3000, true);
  console.log("服务启动");
}

await startServer();
await buildMain();
