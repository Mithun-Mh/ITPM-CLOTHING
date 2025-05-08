## GitHub Copilot Chat

- Extension Version: 0.26.0 (prod)
- VS Code: vscode/1.99.0
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (48 ms)
- DNS ipv6 Lookup: Error (70 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (375 ms)
- Node.js https: HTTP 200 (376 ms)
- Node.js fetch: HTTP 200 (684 ms)
- Helix fetch: HTTP 200 (423 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (50 ms)
- DNS ipv6 Lookup: Error (52 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (15 ms)
- Electron fetch (configured): HTTP 200 (979 ms)
- Node.js https: HTTP 200 (980 ms)
- Node.js fetch: HTTP 200 (1279 ms)
- Helix fetch: HTTP 200 (1028 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).