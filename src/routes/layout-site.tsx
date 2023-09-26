import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import Footer from "~/components/starter/footer/footer";
import styles from "./styles.css?inline";
import { Navigation } from "~/components/navigation/navigation";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main>
        <Navigation/>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
