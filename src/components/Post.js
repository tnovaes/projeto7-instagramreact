import { useState } from 'react';

export default function Post(props) {
    const [curtida, setCurtida] = useState(false);
    const [salvar, setSalvar] = useState(false);
    const [numeroCurtidas, setNumeroCurtidas] = useState(props.numeroCurtidas);

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img} alt={props.nome} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.conteudo} alt={props.conteudoAlt} onDoubleClick={() => {
                    if (!curtida) {
                        setNumeroCurtidas(numeroCurtidas + 1);
                    }
                    setCurtida(true);
                }} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div data-test="like-post">
                        {curtida ? <ion-icon class="vermelho" name="heart" onClick={() => { setCurtida(false); setNumeroCurtidas(numeroCurtidas - 1) }} /> :
                            <ion-icon class="" name="heart-outline" onClick={() => { setCurtida(true); setNumeroCurtidas(numeroCurtidas + 1) }} />}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div data-test="save-post">
                        {salvar ? <ion-icon name="bookmark" onClick={() => setSalvar(false)} /> :
                            <ion-icon name="bookmark-outline" onClick={() => { setSalvar(true) }} />}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtida} alt={props.nomeCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras <span data-test="likes-number">{numeroCurtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}