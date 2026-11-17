// ==UserScript==
// @name         AmapLoginAssist - 新版高德密码登录入口
// @namespace    https://github.com/hehehegfd/AmapLoginAssist
// @homepageURL  https://github.com/hehehegfd/AmapLoginAssist
// @version      0.8.2
// @description  启用高德原生密码登录，并在登录弹窗内保留官方账号页及第三方登录入口。
// @author       hehehegfd; original idea by chaofunchengfeng
// @match        https://*.amap.com/*
// @match        https://amap.com/*
// @match        https://*.gaode.com/*
// @match        https://gaode.com/*
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
    if (location.hostname === 'id.amap.com') return;


    function enablePassword() {
        const modal = window.AmapLoginComponent?.AmapBizLoginModal;
        if (!modal || modal.show.amapLoginAssist) return;
        const show = modal.show;
        modal.show = function (options = {}) {
            return show.call(this, {...options,
                mode: (options.mode ?? this.config?.mode ?? 3) | 8,
                modeSorted: [{type: 8, weight: 100}]
            });
        };
        modal.show.amapLoginAssist = true;
        document.removeEventListener('load', enablePassword, true);
    }
    // 8 是官方 SDK 的 PASSWORD_LOGIN 标志；沿用原生表单、验证和成功回调。
    document.addEventListener('load', enablePassword, true);
    enablePassword();

    function addLoginLink() {
        for (const panel of document.querySelectorAll('.amap-qrcode-login-content')) {
            if (panel.querySelector('#amap-login-assist-2026')) continue;
            const link = document.createElement('a');
            link.id = 'amap-login-assist-2026';
            link.textContent = '密码 / 第三方登录';
            link.title = '打开高德官方账号页；登录后返回当前地图';
            link.style.cssText = 'display:block;margin:12px 0 0;padding:8px 12px;border:1px solid #d2e2ff;border-radius:6px;background:#fff;color:#1558c9;text-align:center;font:13px/1.4 "Microsoft YaHei",sans-serif;text-decoration:none;';
            function updateLink() {
                link.href = 'https://id.amap.com/?ref=' + encodeURIComponent(location.href);
            }
            updateLink();
            link.addEventListener('pointerdown', updateLink);
            link.addEventListener('click', updateLink);
            panel.appendChild(link);
        }
    }

    addLoginLink();
    // 弹窗按需创建，关闭后重开也需要补回入口。
    new MutationObserver(addLoginLink).observe(document.body, {childList: true, subtree: true});
})();
