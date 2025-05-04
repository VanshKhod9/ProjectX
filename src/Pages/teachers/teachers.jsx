import React from 'react';
import './teachers.css';

const teachers = () => {
  return (
    <div className="assistants-container">
      <div className="assistants-left">
        <h2>Your AI Teaching Assistants Team</h2>
        <p>Your Personalized AI Team of smart assistants that help you plan, assign, and evaluate — faster. AI That Works With You.</p>
        
        <ul className="assistants-list">
          <li><span className="icon">📅</span> <strong>AI PLANNING ASSISTANT</strong><br />Plan your year with ease — set goals, align curriculum, and auto-schedule lessons.</li>
          <li><span className="icon">✏️</span> <strong>AI CLASS ASSISTANT</strong><br />Design daily content — quizzes, homework, and assignments, personalized by AI.</li>
          <li><span className="icon">🎨</span> <strong>AI RESOURCE GENERATOR</strong><br />Create personalized classroom materials — flashcards, slides, and visual aids in seconds.</li>
          <li><span className="icon">📈</span> <strong>AI ADMIN ASSISTANT</strong><br />Track student progress, send reports, and manage communication in one place.</li>
          <li><span className="icon">🌱</span> <strong>AI GROWTH ASSISTANT</strong><br />Achieve your PD goals — self-assess, earn certifications, and grow with AI support.</li>
          <li><span className="icon">🧑‍🏫</span> <strong>AI CO-TEACHER</strong><br />Teach with an AI avatar — co-deliver lessons, explain concepts, and guide students.</li>
        </ul>
      </div>

      <div className="assistants-right">
        <div className="feature-box">
          <p className="category">PLAN</p>
          <h3><span className="icon">🌱</span> Planning Studio</h3>
          <p>Set class goals, align to curriculum, and auto-plan your teaching year — all in one smart planner.</p>
          <a href="#">Try Planning Studio for Free</a><br />
          <a href="#">See features</a>
        </div>
        <div className="feature-box">
          <p className="category">DESIGN</p>
          <h3><span className="icon">🖌️</span> Teaching Studio</h3>
          <p>Design daily teaching content — from Lesson Plans, quizzes, Activities, Homework, assignments to Assessments.</p>
          <a href="#">Try Teaching Studio for Free</a><br />
          <a href="#">See features</a>
        </div>
        <div className="feature-box">
          <p className="category">CREATE</p>
          <h3><span className="icon">🎨</span> Content Lab</h3>
          <p>Turn ideas into visual stories, flashcards, slideshows, infographics, podcasts and more — customized for your students.</p>
          <a href="#">Try Content Lab for Free</a><br />
          <a href="#">See features</a>
        </div>
        <div className="feature-box">
          <p className="category">MANAGE</p>
          <h3><span className="icon">📋</span> Command Desk</h3>
          <p>Monitor student performance, send reports, communicate with parents and admin — all from one dashboard.</p>
          <a href="#">Try Command Desk for free</a><br />
          <a href="#">See features</a>
        </div>
        <div className="feature-box">
          <p className="category">GROW</p>
          <h3><span className="icon">🌱</span> Growth Hub</h3>
          <p>Set Professional Development goals, earn certifications, and reflect on your teaching journey with AI guidance.</p>
          <a href="#">Try Growth for free</a><br />
          <a href="#">See features</a>
        </div>
        <div className="feature-box">
          <p className="category">EARN</p>
          <h3><span className="icon">💲</span> Avatar Hub</h3>
          <p>Create AI teaching avatars, share your content, and earn by helping others teach better.</p>
          <a href="#">Try Avatar Hub for free</a><br />
          <a href="#">See features</a>
        </div>
      </div>
    </div>
  );
};

export default teachers;
