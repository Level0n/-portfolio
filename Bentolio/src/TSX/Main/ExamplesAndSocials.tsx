import Examples from "./ExamplesAndSocials/Examples";
import Socials from "./ExamplesAndSocials/Socials";
import '../../styles/examples-socials.css'
import type { JSX } from 'react';

function ExamplesAndSocials(): JSX.Element {
  return (
    <section className="examples-socials">
      <Examples />
      <Socials />
    </section>
  );
}

export default ExamplesAndSocials;