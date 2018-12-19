import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div id='about'>
                <h2>About Me</h2>
                <p id='blurb'>Motivated Front-End Developer with experience in Ruby on Rails, JavaScript, and React. I am a self-starter who enjoys collaborating within a team. I discovered coding through curiosity and building websites for fun for employers. I look for companies that innovate and match my desire to do things differently.</p>

                <h2>Languages</h2>
                <div id='languageIcons'>
                    <img className='icon' alt='html icon' src={require('../images/html5.png')} />
                    <img className='icon' alt='css icon' src={require('../images/css3.png')} />
                    <img className='icon' alt='js icon' src={require('../images/js.png')} />
                    <img className='icon' alt='react icon' src={require('../images/react.png')} />
                    <img className='icon' alt='ruby icon' src={require('../images/ruby.png')} />
                    <img className='icon' alt='rails icon' src={require('../images/rails.png')} />
                    {/* <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i> */}
                    {/* <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i> */}
                </div>

                <h2>Around the Web</h2>
                <div id='webIcons'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chelseacrowson/"><img className='atw' alt='linkedin' src={require('../images/linkedin.png')} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme"><img className='atw' alt='github' src={require('../images/github.png')} /></a>
                </div>
            </div>
        )
    }
}