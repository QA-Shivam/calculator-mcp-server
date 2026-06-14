# Calculator MCP Server

A simple Model Context Protocol server that exposes calculator tools for addition, subtraction, multiplication, and division.

## Features

- Add two numbers
- Subtract two numbers
- Multiply two numbers
- Divide two numbers with zero-division protection

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Run locally

```bash
node npx-server.js
```

## Use with npx

This package exposes a CLI entry point through the `bin` field in `package.json`.

```bash
npx calculator-mcp-server
```

## Inspect with the MCP Inspector

```bash
npx @modelcontextprotocol/inspector npx calculator-mcp-server
```

## Claude Desktop or VS Code configuration

```json
{
  "servers": {
    "Calculator": {
      "command": "npx",
      "args": ["-y", "calculator-mcp-server"],
      "env": {}
    }
  }
}
```

## Publish to npm

```bash
npm login
npm publish --access public
```

Before publishing, make sure the package name is available on npm.

## Project files

- `npx-server.js`: MCP server implementation
- `package.json`: package metadata and CLI entry point