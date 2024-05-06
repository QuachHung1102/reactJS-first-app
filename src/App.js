import { useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import TicTacToe from "./components/Tic-Tac-Toe";
import CoreConcept from "./components/CoreConcept";
import TaskApp from "./components/Task";

import "./App.css";
import "./styles.css";
import { CORE_CONCEPTS, EXAMPLES, CONTENTS } from "./data";

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [activeContentIndex2, setActiveContentIndex2] = useState(`components`);

  return (
    <div className="container">
      <Header />
      <div id="tabs">
        <menu>
          <TabButton
            setActiveContentIndex={setActiveContentIndex}
            activeContentIndex={activeContentIndex}
            activeCondition="0"
          >
            Why React?
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex}
            activeContentIndex={activeContentIndex}
            activeCondition="1"
          >
            Core Features
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex}
            activeContentIndex={activeContentIndex}
            activeCondition="2"
          >
            Related Resources
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex}
            activeContentIndex={activeContentIndex}
            activeCondition="3"
          >
            React vs JS
          </TabButton>
        </menu>
        <div id="tab-content">
          <ul>
            {CONTENTS[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((coreConcep) => {
            return <CoreConcept {...coreConcep} key={coreConcep.title} />;
          })}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            setActiveContentIndex={setActiveContentIndex2}
            activeContentIndex={activeContentIndex2}
            activeCondition="components"
          >
            Components
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex2}
            activeContentIndex={activeContentIndex2}
            activeCondition="jsx"
          >
            JSX
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex2}
            activeContentIndex={activeContentIndex2}
            activeCondition="props"
          >
            Props
          </TabButton>
          <TabButton
            setActiveContentIndex={setActiveContentIndex2}
            activeContentIndex={activeContentIndex2}
            activeCondition="state"
          >
            State
          </TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[activeContentIndex2].title}</h3>
          <p>{EXAMPLES[activeContentIndex2].description}</p>
          <pre>
            <code>{EXAMPLES[activeContentIndex2].code}</code>
          </pre>
        </div>
      </section>
      <div>
        <TicTacToe></TicTacToe>
      </div>
      <div className="taskApp">
        <div>
          <TaskApp />
        </div>
      </div>
    </div>
  );
}
