import Sugestao from './Sugestao'

export default function Sugestoes() {
    const usuarios = [
        { img: './assets/img/bad.vibes.memes.svg', nome: 'bad.vibes.memes', razao: 'Segue você' },
        { img: './assets/img/chibirdart.svg', nome: 'chibirdart', razao: 'Segue você' },
        { img: './assets/img/razoesparaacreditar.svg', nome: 'razoesparaacreditar', razao: 'Novo no Instagram' },
        { img: './assets/img/adorable_animals.svg', nome: 'adorable_animals', razao: 'Segue você' },
        { img: './assets/img/smallcutecats.svg', nome: 'smallcutecats', razao: 'Segue você' }

    ]



    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {usuarios.map(u => <Sugestao img={u.img} nome={u.nome} razao={u.razao} />)}
        </div>
    );
}