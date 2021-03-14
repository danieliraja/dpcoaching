Menu = {
    toggleMenu() {
        document.querySelector("ul.menu-items").classList.toggle("active");
    },
};

Blog = {
    getBlogContent(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", "./../../blog/blog.json", true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    },

    loadBlogContent() {

        const url = window.location.href.split();    
        console.log(url);
    },

    loadBlog() {
        window.onload = function () {
            var elements = document.getElementsByTagName("*"),
                i;
            for (i in elements) {
                if (
                    elements[i].hasAttribute &&
                    elements[i].hasAttribute("data-include")
                ) {
                    fragment(elements[i], elements[i].getAttribute("data-include"));
                }
            }

            function fragment(el, url) {
                var localTest = /^(?:file):/,
                    xmlhttp = new XMLHttpRequest(),
                    status = 0;

                xmlhttp.onreadystatechange = function () {
                    /* if we are on a local protocol, and we have response text, we'll assume
                     *  				things were sucessful */
                    if (xmlhttp.readyState == 4) {
                        status = xmlhttp.status;
                    }
                    if (localTest.test(location.href) && xmlhttp.responseText) {
                        status = 200;
                    }
                    if (xmlhttp.readyState == 4 && status == 200) {
                        el.outerHTML = xmlhttp.responseText;
                    }
                };

                try {
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();
                } catch (err) {
                    /* todo catch error */
                }
            }
        };
    },
};

Utils = {
    linkCreator(string){
        const finalLink = string.replace(/\s/g, '-').trim()
        console.log(finalLink.toLowerCase());
    },
    getYear() {
        let date = new Date();
        date = date.getFullYear();
        let year = document.querySelector(".year");
        year.innerHTML = date;
    },

    noAttr(tag, atribute) {
        let href = document.querySelectorAll(tag);
        return href.forEach((item) => {
            item.getAttribute(atribute) === null ?
                item.classList.add("noAttrHere") :
                null;
        });
    },
};
Blog.loadBlogContent();
Blog.loadBlog();
Utils.noAttr("a", "title");
Utils.getYear();
