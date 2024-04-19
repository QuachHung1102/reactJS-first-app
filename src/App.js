import { useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import TicTacToe from "./components/Tic-Tac-Toe";

import "./App.css";
import "./styles.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

function CoreConcept({ img, title, description }) {
  return (
    <li>
      <img src={img} className="" alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
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
    </div>
  );
}
