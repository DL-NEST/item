// 自定义协议
import {Protocol, protocol} from "electron";
import {URL} from "url";
import {readFile} from "fs";
import * as path from 'path'
import {sendNotification} from "../appSetup";


// 注册协议
export function signProtocol() {
    // 注册协议
    protocol.registerSchemesAsPrivileged([
        { scheme: 'app', privileges: { secure: true, standard: true } }
    ])
}

// 创建协议
export const createProtocol = (scheme:string, customProtocol?:Protocol) => {
    (customProtocol || protocol).registerBufferProtocol(
        scheme,
        (request, respond) => {
            let pathName = new URL(request.url).pathname
            pathName = decodeURI(pathName) // Needed in case URL contains spaces
            // 后移到asar根目录
            readFile(path.join(__dirname,"..", pathName), (error, data) => {
                if (error) {
                    console.error(
                        `Failed to read ${pathName} on ${scheme} protocol`,
                        error
                    )
                    sendNotification({
                        title: 'url',
                        body: `Failed to read ${path.join(__dirname, pathName)} on ${scheme} protocol`,
                    })
                }
                const extension = path.extname(pathName).toLowerCase()
                let mimeType = ''

                if (extension === '.js') {
                    mimeType = 'text/javascript'
                } else if (extension === '.html') {
                    mimeType = 'text/html'
                } else if (extension === '.css') {
                    mimeType = 'text/css'
                } else if (extension === '.svg' || extension === '.svgz') {
                    mimeType = 'image/svg+xml'
                } else if (extension === '.json') {
                    mimeType = 'application/json'
                } else if (extension === '.wasm') {
                    mimeType = 'application/wasm'
                }

                respond({ mimeType, data })
            })
        }
    )
}