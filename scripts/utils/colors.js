/**
 * @fun node控制台颜色输出
 * */
class Log {
  Success(txt) {
    console.log("\x1B[42;30m Success \x1B[40;32m " + txt + "\x1B[0m");
  }
  Info(txt) {
    console.log("\x1B[44;30m INFO \x1B[40;37m " + txt + "\x1B[0m");
  }
  Error(txt) {
    console.log("\x1B[41;30m ERROR \x1B[40;31m " + txt + "\x1B[0m");
  }
  Warn(txt) {
    console.log("\x1B[43;30m WARN \x1B[40;33m " + txt + "\x1B[0m");
  }
  Clear() {
    console.log("\x1B[0m\x1B[0m");
  }
  Bar(now, total) {
    if (now !== 0) {
      console.log("\x1B[1A\x1B[K\x1B[1A");
    }
    let bf = ((now / total) * 100).toFixed(0);
    let bar = () => {
      let str = "";
      for (let i = 0; i < 50; i++) {
        if (i == (bf / 2).toFixed(0)) {
          str += ">";
        }
        i < (bf / 2).toFixed(0) ? (str += "=") : (str += " ");
      }
      return str;
    };
    console.log(
      "\x1B[46;30m ProGressBar \x1B[40;36m " +
        "server: " +
        bf +
        "% 处理的文件" +
        " [" +
        bar() +
        "] " +
        now +
        "/" +
        total +
        "\x1B[0m"
    );
  }
}

export { Log };
