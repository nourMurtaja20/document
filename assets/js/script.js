// side menu when click plus & minus
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
var ul_inside = document.getElementById("ul_inside");
let plus1 = document.getElementById("plus1");
let minus1 = document.getElementById("minus1");
var ul_inside1 = document.getElementById("ul_inside1");
plus.addEventListener("click", function () {
    ul_inside.style.display = "block";
    minus.style.display = "block";
    plus.style.display = "none";
    ul_inside1.style.display = "none";
    minus1.style.display = "none";
    plus1.style.display = "block";
});
minus.addEventListener("click", function () {
    ul_inside.style.display = "none";
    minus.style.display = "none";
    plus.style.display = "block";
});
plus1.addEventListener("click", function () {
    ul_inside1.style.display = "block";
    minus1.style.display = "block";
    plus1.style.display = "none";
    ul_inside.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
});
minus1.addEventListener("click", function () {
    ul_inside1.style.display = "none";
    minus1.style.display = "none";
    plus1.style.display = "block";
});

// active menu links 
const sections = document.querySelectorAll('section');
onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight) {
            var currentId = section.attributes.id.value;
            if (currentId == "Theme") {
                ul_inside.style.display = "block";
                ul_inside1.style.display = "none";
                minus.style.display = "block";
                plus.style.display = "none";
                minus1.style.display = "none";
                plus1.style.display = "block";
            } else if (currentId == "BasicSiteSetting") {
                ul_inside1.style.display = "block";
                ul_inside.style.display = "none";
                minus1.style.display = "block";
                plus1.style.display = "none";
                minus.style.display = "none";
                plus.style.display = "block";
            } else if (currentId == "General" || currentId == "Header" || currentId == "footer") {
                ul_inside1.style.display = "none";
                ul_inside.style.display = "none";
                plus.style.display = "block";
                minus.style.display = "none";
                minus1.style.display = "none";
                plus1.style.display = "block";
            }
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};
var removeAllActiveClasses = function () {
    document.querySelectorAll(".nav_link").forEach((el) => {
        el.classList.remove("active");
    });
};
var addActiveClass = function (id) {
    var selector = `.nav_link[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");

};

// increase and decrease font size 
var decrease = document.getElementById("decrease");
var increase = document.getElementById("increase");
var defult = document.getElementById("defult");
const ps = document.querySelectorAll('p');
const h3s = document.querySelectorAll('h3');
const h1s = document.getElementsByClassName('label_header');
var p_size = document.getElementById("p_size");
// var style = window.getComputedStyle(p_size).getPropertyValue('font-size');
var fontSize = 16;
var fontSize_h1 = 24;

decrease.onclick = function () {
    fontSize = fontSize - 2;
    fontSize_h1 = fontSize_h1 - 2;
    if (fontSize >= 12 && fontSize_h1 >= 20) {
        ps.forEach((p) => {
            p.style.fontSize = fontSize + "px";

        });
        h3s.forEach((p) => {
            p.style.fontSize = fontSize + "px";
        });
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.fontSize = fontSize_h1 + "px";
        }
    }
}
defult.onclick = function () {
    fontSize = 16;
    fontSize_h1 = 24;
    ps.forEach((p) => {
        p.style.fontSize = fontSize + "px";
    });
    h3s.forEach((p) => {
        p.style.fontSize = fontSize + "px";
    });
    for (let i = 0; i < h1s.length; i++) {
        h1s[i].style.fontSize = fontSize_h1 + "px";
    }
}
increase.onclick = function () {
    fontSize = fontSize + 2;
    fontSize_h1 = fontSize_h1 + 2;
    if (fontSize <= 22) {
        ps.forEach((p) => {
            p.style.fontSize = fontSize + "px"
        });
        h3s.forEach((p) => {
            p.style.fontSize = fontSize + "px"
        });
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.fontSize = fontSize_h1 + "px";

        }
    }
}

// change from light to dark theme
let check = document.getElementById('checkbox');
check.onclick = function () {
    document.body.classList.toggle("dark");
}