Menu = {
    toggleMenu() {
        document.querySelector('ul.menu-items').classList.toggle('active');        
    }
}

Blog = {
    toggleBlog(){
        
    }   

}

Utils = {
    getYear(){
        let date = new Date();
        date = date.getFullYear();
        let year = document.querySelector('.year');
        year.innerHTML = date;
    }
}

Utils.getYear();

