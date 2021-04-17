Menu = {
    toggleMenu() {
        document.querySelector("ul.menu-items").classList.toggle("active");
    },
};

Blog = {
    blogCards(){
        const blogHeight = ''
        document.querySelector('.blog-cards') !== null  ? blogHeight == document.querySelector('.blog-cards').offsetHeight : null 
        console.log(blogHeight)

        const cards = document.querySelectorAll('.blog-card-item')        
        cards.forEach((item) => {
            const image = item.lastElementChild.getAttribute('href').split('/')
            const cardImage = `
            <div class="blog-card-subtitle-items">
            <img class="blog-card-item-thumb" src="../assets/img/blog/${image[1].replace('.html', '.png')}"/>
            ${item.innerHTML}
            </div>
            `
            console.log()
            item.innerHTML = cardImage
        })
            
        
    },
    loadBlogContent() {

        const url = window.location.href.split();
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
Blog.blogCards()
Blog.loadBlogContent();
Blog.loadBlog();
Utils.noAttr("a", "title");
Utils.getYear();
