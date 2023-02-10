import Story from './Story'

const usuarios = [
    { img: './assets/img/9gag.svg', nome: '9gag' },
    { img: './assets/img/barked.svg', nome: 'barked' },
    { img: './assets/img/filomoderna.svg', nome: 'filomoderna' },
    { img: './assets/img/memeriagourmet.svg', nome: 'memeriagourmet' },
    { img: './assets/img/meowed.svg', nome: 'meowed' },
    { img: './assets/img/nathanwpylestrangeplanet.svg', nome: 'nathanwpylestrangeplanet' },
    { img: './assets/img/respondeai.svg', nome: 'respondeai' },
    { img: './assets/img/wawawicomics.svg', nome: 'wawawicomics' }
]


export default function Stories() {
    return (
        <div class="stories">
            {usuarios.map(u => <Story img={u.img} nome={u.nome} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );

}