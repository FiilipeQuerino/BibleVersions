const livro = async (teste) => {
    return data = fetch(`https://www.abibliadigital.com.br/api/${teste}`)
        .then(resposta => {
            return resposta.json()
        })
        .then(json => {
            console.log(json);
            return json;
        })
}

console.log(livro('verses/nvi/sl/23'))