import { useState } from 'react';

export default function Usuario() {
    const [nomePerfil, setNomePerfil] = useState('catanacomics');
    const [imgPerfil, setImgPerfil] = useState('./assets/img/catanacomics.svg');

    function mudarNome() {
        const aux = prompt("Digite o nome do seu perfil:");
        if (!(aux === null || aux === undefined || aux === "")) {
            setNomePerfil(aux);
        }
    }

    function mudarImg() {
        const aux = prompt("Digite o link da sua imagem de perfil:")
        if (!(aux === null || aux === undefined || aux === "")) {
            setImgPerfil(aux);
        }
    }


    return (
        <div class="usuario">
            <img data-test="profile-image" src={imgPerfil} alt="imagem de perfil" onClick={() => mudarImg()} />
            <div class="texto">
                <span>
                    <strong><span data-test="name">{nomePerfil}</span></strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={() => mudarNome()} />
                </span>
            </div>
        </div>
    );
}