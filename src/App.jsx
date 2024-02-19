import Accordian from "./components/Accordian/Accordian.jsx";
import AccordianItem from "./components/Accordian/AccordianItem.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordian className="accordion">
          <AccordianItem className="accordion-item" title="We got 20years of experience">
            <article>
              <p>You can&apos;t go wrong with us using.</p>
              <p>
                We are in the business of planning highly individualized vacation tips for 
                more than 20years.
              </p>
            </article>
          </AccordianItem>
          <AccordianItem className="accordion-item" title="We're working with local guides">
            <article>
              <p>We are not doing this alone from our office.</p>
              <p>
                Instead we are working with local guide to ensure a safe and pleasant vacation
              </p>
            </article>
          </AccordianItem>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
