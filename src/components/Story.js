export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.nome} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    );
}