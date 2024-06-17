import React from 'react';

function AboutMe() {
  return (
    <div className="aboutme">
      <div id="aboutme-text">
        <h2>About me</h2>
      </div>
      <div id="additional-content">
        <p>Here is some more content about me. You can scroll down to read more.</p>
        <p>Additional content goes here.</p>
        <p>You can add as much content as you want, and it will be scrollable.</p>
      </div>
    </div>
  );
}

export default AboutMe;
