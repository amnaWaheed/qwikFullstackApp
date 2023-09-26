import { $, component$, useStore, useTask$ } from '@builder.io/qwik';

interface ItemProps {
    handleClickFunc? : any
}

export const Button = component$((props:ItemProps) => {
    const state = useStore({message:'cliked child'})
    useTask$(({track})=>{
      track(state)
    })
    const handleClick = $(()=>{
        state.message = 'message is changed now',
        props.handleClickFunc()
    })
  return(
    <>
    <button class = 'bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400' onClick$={handleClick} >Click me</button>
    </>
  )
});