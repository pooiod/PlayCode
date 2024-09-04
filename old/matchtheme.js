function getCookie(t) {
    let e = document.cookie.split(";");
    for (let i = 0; i < e.length; i++) {
        let n = e[i].trim();
        if (n.startsWith(t + "=")) return decodeURIComponent(n.substring(t.length + 1))
    }
    return null
}
function getsetting(t) {
    try {
        return JSON.parse(getCookie("settings"))[t]
    } catch (e) {
        document.cookie = `settings=${encodeURI("")}`, "" != getCookie("settings") && getCookie("settings") ? window.location.href = "error.html" : window.location.reload()
    }
}
var link = document.createElement("link");
link.rel = "stylesheet", link.type = "text/css", link.href = getsetting("theme"), document.head.appendChild(link);
