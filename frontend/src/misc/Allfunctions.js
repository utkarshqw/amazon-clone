import cookie from "js-cookie"

const setCookie = (cookiename, data) => {
 cookie.set(cookiename,data,{
    expires:1,
    path:""
 })
}

const getCookie = (cookiename) => {
    return cookie.get(cookiename)
}

const removeCookie = (cookiename) => {
    return cookie.remove(cookiename)
}
export {setCookie,getCookie,removeCookie}