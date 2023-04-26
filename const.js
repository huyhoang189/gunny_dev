let config;
if (
  typeof process.env.NODE_ENV != "undefined" &&
  process.env.NODE_ENV.trim() === "stage"
) {
  config = {
    host: "http://launcher.gunhuyenthoai.me",
    debug: false,
  };
} else if (
  typeof process.env.NODE_ENV != "undefined" &&
  process.env.NODE_ENV.trim() === "development"
) {
  config = {
    host: "http://launcher.gunhuyenthoai.me",
  };
} else {
  // Prod mode
  config = {
    host: "http://launcher.gunhuyenthoai.me",
    debug: false,
  };
}
module.exports = config;
