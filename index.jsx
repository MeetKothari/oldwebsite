import React from 'react';

function App() {
  return (
    <div>
      {/* Homepage */}
      <header>
        <h1>Your Name</h1>
        <nav>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          {/* Your about me content here */}
        </section>
        <section id="projects">
          <h2>Projects</h2>
          {/* Your project content here */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          {/* Your contact form or information here */}
        </section>
      </main>
    </div>
  );
}

export default App;
