import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
;

export default component$(() => {
  return (
    <>
     <div>Home page</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home page",
  meta: [
    {
      name: "description",
      content: "Welcome to home page",
    },
  ],
};
