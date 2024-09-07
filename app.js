
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML="Nenhum atleta foi encontrado. Você precisa digitar algum nome"
        return 

    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags=dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `z
    <div class="item-resultado">
        </h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        <h2>
        <p class="descrição-meta">${dado.descricao}.</p>
        <a href=${dado.instagram}target="_blank">Instagram da atleta</a>
    </div>
`;
    }
      
}

if(!resultados){
    resultados = "NNada foi encontrado"


}
section.innerHTML = resultados

}







