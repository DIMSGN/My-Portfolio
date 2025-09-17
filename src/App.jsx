import React from 'react';
import './App.css';
import './theme.css';
import { Navigation, Footer, Hero, About, Skills, Projects, Experience, Contact, GlassSection, ScrollingGlassContainers, ScrollReactiveParticles } from './components';

const App = () => {
  const sections = [
    { id: 'about', Component: About, delay: 1 },
    { id: 'skills', Component: Skills, delay: 2 },
    { id: 'projects', Component: Projects, delay: 3 },
    { id: 'experience', Component: Experience, delay: 4 },
    { id: 'contact', Component: Contact, delay: 5, showDecorations: false }
  ];

  return (
    <div className="app-background">
      <ScrollingGlassContainers />
      <ScrollReactiveParticles />
      <div className="main-content">
        <Navigation />
        <Hero />
        {sections.map(({ id, Component, delay, showDecorations }) => (
          <div key={id} id={id}>
            <GlassSection delay={delay} showDecorations={showDecorations}>
              <Component />
            </GlassSection>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default App;