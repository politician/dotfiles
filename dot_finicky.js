// Learn more about configuration options: https://github.com/johnste/finicky/wiki/Configuration

module.exports = {
  defaultBrowser: "Browserosaurus",
  options: {
    // Hide the finicky icon from the top bar. Default: false
    hideIcon: true,
    // Check for update on startup. Default: true
    checkForUpdate: false,
  },
  handlers: [
    {
      // Open apple.com urls in Safari
      match: ["apple.com*", "*.apple.com*"],
      browser: "Safari",
    },
    {
      // Open Spotify links in Spotify app
      match: "open.spotify.com/*",
      browser: "Spotify",
    },
    {
      // Open Zoom links in Zoom app
      match: ["zoom.us/*", finicky.matchDomains(/.*\zoom.us/), /zoom.us\/j\//],
      browser: "us.zoom.xos",
    },
    {
      // Open DevDocs links in DevDocs app
      match: "https://devdocs.io/*",
      browser: "DevDocs",
    },
    {
      // Open Figma links in Figma app
      match: "https://www.figma.com/file/*",
      browser: "Figma",
    },
    {
      match: ({ url }) =>
        url.host.includes("jitsi.your-selfhosted-server.com") ||
        url.host.includes("meet.jit.si"),
      url({ url }) {
        return {
          ...url,
          protocol: "jitsi-meet",
          host: url.host,
          pathname: url.pathname,
        };
      },
      browser: "/Applications/Jitsi Meet.app",
    },
  ],
};
