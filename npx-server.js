#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";


// create the MCP server
const server = new McpServer({
    name: "Calculator",
    version: "1.0.0",
});


// Add addition tool
server.tool("add","Add Two Numbers",
    {
    a:z.number(),
    b:z.number()
    },
    async({a,b})=>{
        return{
            content:[
                {
                    type:"text",
                    text:`Result: ${a+b}`,
                },
            ],
        };
    }

);


// Add subtract tool
server.tool("subtract","Subtract Two Numbers",
    {
    a:z.number(),
    b:z.number()
    },
    async({a,b})=>{
        return{
            content:[
                {
                    type:"text",
                    text:`Result: ${a-b}`,
                },
            ],
        };
    }

);

// Add multiplication tool
server.tool("multiply","Multiply Two Numbers",
    {
    a:z.number(),
    b:z.number()
    },
    async({a,b})=>{
        return{
            content:[
                {
                    type:"text",
                    text:`Result: ${a*b}`,
                },
            ],
        };
    }

);

// Add division tool
server.tool("division","Divide Two Numbers",
    {
    a:z.number(),
    b:z.number()
    },
    async({a,b})=>{
        if(b==0){
            return{
                content:[
                    {
                        type:"text",
                        text:"Divison by Zero is not allowed !"
                    }
                ]
            }
        }
        return{
            content:[
                {
                    type:"text",
                    text:`Result: ${a/b}`,
                },
            ],
        };
    }

);


    const transport = new StdioServerTransport();
    await server.connect(transport);
