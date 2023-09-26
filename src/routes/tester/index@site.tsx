import { component$ ,useStore,$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";

export default component$(() => {
  const message = useStore({name:'assigned'})

  const handleChange = $(()=>{
    message.name = 're assigned value'
  })

  return (
    <>
     <div>test page</div>
     <Button handleClickFunc={handleChange} />
     <div>{message?.name}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "test page",
  meta: [
    {
      name: "description",
      content: "Welcome to test page",
    },
  ],
};
