const addCookie = (name, value) => {
    document.cookie = name + '=' + value + '; path=/';
}

const getCookie = (name) => {
    let cookie = document.cookie.match(new RegExp(name + '=([^;]+)'));
    return cookie ? cookie[1] : null;
}

addCookie('cookie_name', 'cookie_value');
getCookie('cookie_name');