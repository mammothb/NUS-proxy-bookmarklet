// ==UserScript==
// @name           NUS Proxy Bookmarklet
// @namespace      nus-proxy-bookmarklet
// @include        *
// @match          *
// @grant          none
// @version        0.0.1
// @description    Adds "Open with NUS Proxy Bookmarklet" in context menu on all
//                 sites
// ==/UserScript==

if (!("contextMenu" in document.documentElement &&
      "HTMLMenuItemElement" in window)) return;

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

var menu = body.appendChild(document.createElement("menu"));
menu.outerHTML = '<menu id="userscript-nus-proxy-bookmarklet" type="context">\
    <menuitem label="Open with NUS Proxy Bookmarklet"\
    icon="data:image/png;base64,\
    AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAA\
    AAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAMDcwADwyqYA1PD/ALHi/wCO1P\
    8Aa8b/AEi4/wAlqv8AAKr/AACS3AAAerkAAGKWAABKcwAAMlAA1OP/ALHH/wCOq/8Aa4//AEhz/\
    wAlV/8AAFX/AABJ3AAAPbkAADGWAAAlcwAAGVAA1NT/ALGx/wCOjv8Aa2v/AEhI/wAlJf8AAAD+\
    AAAA3AAAALkAAACWAAAAcwAAAFAA49T/AMex/wCrjv8Aj2v/AHNI/wBXJf8AVQD/AEkA3AA9ALk\
    AMQCWACUAcwAZAFAA8NT/AOKx/wDUjv8Axmv/ALhI/wCqJf8AqgD/AJIA3AB6ALkAYgCWAEoAcw\
    AyAFAA/9T/AP+x/wD/jv8A/2v/AP9I/wD/Jf8A/gD+ANwA3AC5ALkAlgCWAHMAcwBQAFAA/9TwA\
    P+x4gD/jtQA/2vGAP9IuAD/JaoA/wCqANwAkgC5AHoAlgBiAHMASgBQADIA/9TjAP+xxwD/jqsA\
    /2uPAP9IcwD/JVcA/wBVANwASQC5AD0AlgAxAHMAJQBQABkA/9TUAP+xsQD/jo4A/2trAP9ISAD\
    /JSUA/gAAANwAAAC5AAAAlgAAAHMAAABQAAAA/+PUAP/HsQD/q44A/49rAP9zSAD/VyUA/1UAAN\
    xJAAC5PQAAljEAAHMlAABQGQAA//DUAP/isQD/1I4A/8ZrAP+4SAD/qiUA/6oAANySAAC5egAAl\
    mIAAHNKAABQMgAA///UAP//sQD//44A//9rAP//SAD//yUA/v4AANzcAAC5uQAAlpYAAHNzAABQ\
    UAAA8P/UAOL/sQDU/44Axv9rALj/SACq/yUAqv8AAJLcAAB6uQAAYpYAAEpzAAAyUAAA4//UAMf\
    /sQCr/44Aj/9rAHP/SABX/yUAVf8AAEncAAA9uQAAMZYAACVzAAAZUAAA1P/UALH/sQCO/44Aa/\
    9rAEj/SAAl/yUAAP4AAADcAAAAuQAAAJYAAABzAAAAUAAA1P/jALH/xwCO/6sAa/+PAEj/cwAl/\
    1cAAP9VAADcSQAAuT0AAJYxAABzJQAAUBkA1P/wALH/4gCO/9QAa//GAEj/uAAl/6oAAP+qAADc\
    kgAAuXoAAJZiAABzSgAAUDIA1P//ALH//wCO//8Aa///AEj//wAl//8AAP7+AADc3AAAubkAAJa\
    WAABzcwAAUFAA8vLyAObm5gDa2toAzs7OAMLCwgC2trYAqqqqAJ6engCSkpIAhoaGAHp6egBubm\
    4AYmJiAFZWVgBKSkoAPj4+ADIyMgAmJiYAGhoaAA4ODgDw+/8ApKCgAICAgAAAAP8AAP8AAAD//\
    wD/AAAA/wD/AP//AAD///8A9vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vYcHBwcHBwc\
    HBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBsbGxsbGxsbGxsbGxsbGxsb9hsb9hsY9vYYG/b29hg\
    bG/YbG/Yb9hsb9hscHBz2Gxv2G/b2G/YbG/Yb9vb29hwb9vYb9hv2Gxv2G/YcHBwbG/YbG/Yb9h\
    sb9hsY9vb2GxsbGxsbGxsbGxsbGxsbGxscHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcH\
    BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAAAAAAA\
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
    ="></menuitem></menu>';

document.querySelector("#userscript-nus-proxy-bookmarklet")
    .addEventListener("click", useBookmarklet, false);

function initMenu(aEvent) {
  // Executed when user right click on web page body
  body.setAttribute("contextmenu", "userscript-nus-proxy-bookmarklet");
}

function useBookmarklet(aEvent) {
  // Executed when user click on menuitem
  body.appendChild(document.createElement('script')).src=
      'http://lgdata.s3-website-us-east-1.amazonaws.com/docs/1035/217629/proxywithga.js';
}