var link = document.getElementsByTagName("a");

for (let index = 0; index < link.length; index++) {
    const element = link[index];
    link2 = element.href;
    console.log(link2);
    element.setAttribute("href",link2)
}

var link = document.getElementsByTagName("link");

for (let index = 0; index < link.length; index++) {
    const element = link[index];
    link2 = element.href;
    console.log(link2);
    element.setAttribute("href",link2)
}

var link = document.getElementsByTagName("script");

for (let index = 0; index < link.length; index++) {
    const element = link[index];
    link2 = element.src;
    console.log(link2);
    element.setAttribute("src",link2)
}

var link = document.getElementsByTagName("img");

for (let index = 0; index < link.length; index++) {
    const element = link[index];
    link2 = element.src;
    console.log(link2);
    element.setAttribute("src",link2)
}