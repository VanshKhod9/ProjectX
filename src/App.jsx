import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Lower from './components/LowerNavbar/Lower';
import Main from './components/Main/Main';
import Plan from './components/Plan/Plan';
import Ai from './components/AiAssistant/Ai';
import Footer from './components/Footer/Footer';
import Stories from './components/Stories/Stories';
import Penguin from './components/Penguin/Penguin';
import Fact from './components/FactSection/FactSection';
import Teachers from './Pages/teachers/teachers';

const App = () => {
  const [showTeachers, setShowTeachers] = useState(false);

  return (
    <div>
      <Navbar
        onStudentClick={() => setShowTeachers(false)}
        onTeacherClick={() => setShowTeachers(true)}
      />

      {showTeachers ? (
        <Teachers />
      ) : (
        <>
          <Lower />
          <Main />
          <Stories />
          <Fact />
          <Plan />
          <Ai />
          <Footer />
          <Penguin />
        </>
      )}
    </div>
  );
};

export default App;
