// ==UserScript==
// @name         AmapLoginAssist - 新版高德密码登录入口
// @namespace    https://github.com/hehehegfd/AmapLoginAssist
// @homepageURL  https://github.com/hehehegfd/AmapLoginAssist
// @version      0.8
// @description  在地图左下角添加官方密码及第三方登录入口，登录后返回当前地图。
// @author       hehehegfd; original idea by chaofunchengfeng
// @match        https://ditu.amap.com/*
// @match        https://www.amap.com/*
// @match        https://amap.com/*
// @run-at       document-end
// @noframes
// @grant        none
// @updateURL    https://raw.githubusercontent.com/hehehegfd/AmapLoginAssist/main/AmapLoginAssist.user.js
// @downloadURL  https://raw.githubusercontent.com/hehehegfd/AmapLoginAssist/main/AmapLoginAssist.user.js
// @license      MIT
// ==/UserScript==

/*
Copyright (c) 2025 chaofunchengfeng
Copyright (c) 2026 hehehegfd
Original project: https://github.com/chaofunchengfeng/AmapLoginAssist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function () {
    'use strict';
    if (document.getElementById('amap-login-assist-2026')) return;

    const link = document.createElement('a');
    link.id = 'amap-login-assist-2026';
    link.textContent = '密码 / 第三方登录';
    link.title = '打开高德官方账号页；登录后返回当前地图';
    link.style.cssText = [
        'position:fixed;left:16px;bottom:72px;z-index:2147483000;',
        'padding:8px 14px;background:#fff;color:#1558c9;',
        'border:1px solid #d2e2ff;border-radius:8px;',
        'font:13px/1.4 "Microsoft YaHei",sans-serif;text-decoration:none;'
    ].join('');

    function updateLink() {
        link.href = 'https://id.amap.com/?ref=' + encodeURIComponent(location.href);
    }
    updateLink();
    // 点击前更新返回地址，适配地图内切换页面及中键打开。
    link.addEventListener('pointerdown', updateLink);
    link.addEventListener('click', updateLink);
    document.body.appendChild(link);
})();
