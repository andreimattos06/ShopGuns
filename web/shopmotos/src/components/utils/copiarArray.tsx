//FUNCAO USADA SIMPLESMENTE PARA AJUSTAR AS INFORMAÇÕES RECEBIDAS DO BD NOS SELECTS


export function copiarArray(origem: any[], destino: any[]){
            destino.pop();

            origem.map(cada => {
                cada.map(cada1 => {
                    destino.push(cada1.nome);
                    
                })
               
            console.log(destino)
            })


    return null;
}