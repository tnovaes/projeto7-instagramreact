import Post from './Post'

export default function Posts() {
    const usuarios = [
        {
            img: './assets/img/meowed.svg',
            nome: 'meowed',
            conteudo: './assets/img/gato-telefone.svg',
            conteudoAlt: 'gato-telefone',
            imgCurtida: './assets/img/respondeai.svg',
            nomeCurtida: 'respondeai',
            numeroCurtidas: 101523
        },

        {
            img: '/assets/img/barked.svg',
            nome: 'barked',
            conteudo: './assets/img/dog.svg',
            conteudoAlt: 'dog',
            imgCurtida: '/assets/img/adorable_animals.svg',
            nomeCurtida: 'adorable_animals',
            numeroCurtidas: 99159
        },

        {
            img: './assets/img/adorable_animals.svg',
            nome: 'adorable_animals',
            conteudo: './assets/img/guepardo.jpg',
            conteudoAlt: 'guepardo',
            imgCurtida: '/assets/img/meowed.svg',
            nomeCurtida: 'meowed',
            numeroCurtidas: 444218
        }
    ]

    return (
        <div class="posts">
            {usuarios.map(u => <Post img={u.img} nome={u.nome}
                conteudo={u.conteudo} conteudoAlt={u.conteudoAlt}
                imgCurtida={u.imgCurtida} nomeCurtida={u.nomeCurtida} numeroCurtidas={u.numeroCurtidas} />)}
        </div>
    );
}