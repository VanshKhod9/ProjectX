import React, { useState } from 'react';
import './Plan.css';

const Pricing = () => {
  const [region, setRegion] = useState('global');

  const pricing = {
    global: {
      pro: '$5/month or $50/year',
      master: '$10/month or $100/year',
      proAddon: 'Addon: $1 per 10 extra images, $2 per extra 10 video minutes',
      masterAddon: 'Addon: $2 per 10 extra images, $4 per extra 10 video minutes',
    },
    india: {
      pro: '₹400/month or ₹4000/year',
      master: '₹800/month or ₹8000/year',
      proAddon: 'Addon: ₹80 per 10 extra images, ₹160 per extra 10 video minutes',
      masterAddon: 'Addon: ₹160 per 10 extra images, ₹320 per extra 10 video minutes',
    },
  };

  return (
    <div className="x1-container">
      <h1 className="x1-title">Teach Better. Less Effort. More Impact.</h1>
      <p className="x1-subtitle">
        Join thousands of educators across who enhance their teaching with AI powered tools on YoLearn
      </p>

      <div className="x1-toggle-buttons">
        <button
          className={region === 'global' ? 'x1-toggle x1-active' : 'x1-toggle'}
          onClick={() => setRegion('global')}
        >
          Global
        </button>
        <button
          className={region === 'india' ? 'x1-toggle x1-active' : 'x1-toggle'}
          onClick={() => setRegion('india')}
        >
          India
        </button>
      </div>

      <div className="x1-card-container">

        <div className="x1-card">
          <h2>Basic Plan</h2>
          <p className="x1-price">FREE</p>
          <ul>
            <li>✓ Planning studio (Limited)</li>
            <li>✓ Teaching studio (Limited)</li>
            <li>✗ Content Lab</li>
            <li>✗ Command desk</li>
            <li>✗ Growth Hub</li>
            <li>✗ Avatar Hub</li>
            <li>✓ 5 images/month, 0 min video</li>
            <li>✓ Max 5 lesson plans & quizzes/month</li>
            <li>✗ No content export</li>
          </ul>
          <button className="x1-btn">See plan</button>
        </div>

        <div className="x1-card">
          <h2>Pro Plan</h2>
          <p className="x1-price">{pricing[region].pro}</p>
          <ul>
            <li>✓ Planning studio</li>
            <li>✓ Teaching studio</li>
            <li>✓ Content Lab</li>
            <li>✗ Command desk</li>
            <li>✗ Growth Hub</li>
            <li>✗ Avatar Hub</li>
            <li>✓ 20 images/month, 5 min video</li>
            <li>{pricing[region].proAddon}</li>
          </ul>
          <button className="x1-btn">See plan</button>
        </div>

        <div className="x1-card">
          <h2>Master Plan</h2>
          <p className="x1-price">{pricing[region].master}</p>
          <ul>
            <li>✓ Planning studio</li>
            <li>✓ Teaching studio</li>
            <li>✓ Content Lab</li>
            <li>✓ Command desk</li>
            <li>✓ Growth Hub</li>
            <li>✓ Avatar Hub</li>
            <li>✓ 60 images/month, 15 min video</li>
            <li>{pricing[region].masterAddon}</li>
          </ul>
          <button className="x1-btn">See plan</button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
