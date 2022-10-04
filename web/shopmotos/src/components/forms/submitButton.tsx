import { InputHTMLAttributes } from 'react'

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function SubmitButton(props: SubmitButtonProps){
    return(
        <button
             {...props} 
            className="flex text-bold text-xl bg-red-800 rounded-md px-4 py-2 gap-2 hover:text-zinc-900 text-zinc-200" >

        </button>
        
    )
}