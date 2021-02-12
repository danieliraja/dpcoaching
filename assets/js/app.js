let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contatos</div>
            </section>`;
html = html.split('section').join('ul');

const menu = document.querySelector(".menu-items");

console.log(menu);
// nav.appendChild(html);

