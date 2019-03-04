// doesn't work on github pages
if (document.cookie.split(';').filter((item) => item.includes('dark')).length === 0) {
    document.cookie="dark=0";
} else if (document.cookie.split(';').filter((item) => item.includes('dark=1')).length) {
    document.documentElement.setAttribute("class", "dark");
} else {
    document.documentElement.setAttribute("class", "");
}
