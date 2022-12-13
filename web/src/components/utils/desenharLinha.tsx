//@ts-ignore
export function DesenharLinha(props){
    return(

        <hr
        style={{
            color: props.cor,
            backgroundColor: props.cor,
            height: props.tamanho,
            border: props.tamanho,
        }}
        />


    )

    


}
