//FUNCAO USADA SIMPLESMENTE PARA AJUSTAR AS INFORMAÇÕES RECEBIDAS DO BD NOS SELECTS


export function copiarArray(origem: any[]){
            let retorno = Array();            

            origem.map(cada => {
                //@ts-ignore
                cada.map(cada1 => {
                    retorno.push(cada1.nome);
                    
                })

            })


    return retorno;
}