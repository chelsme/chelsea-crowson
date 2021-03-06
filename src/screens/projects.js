import React, { Component } from 'react';
import Slider from "react-slick";
import { Player } from 'video-react';

export default class Projects extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div id='projects'>
                <h2>Projects</h2>
                <Slider {...settings}>
                    <div>
                        {/* <iframe allowtransparency="true" style={{ background: 'white' }} src="https://www.youtube.com/embed/NFlp6b1dGWo?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        {/* <Player
                            autoPlay={false}
                            poster={require('../images/partyhost.png')}
                        >
                            <source src={require('../images/partyhostframe.mov')} />
                        </Player> */}
                        <iframe title='partyhost' src="https://player.vimeo.com/video/306875270?color=ffffff&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        <div className='usedIcons'>
                            <div className='langIcon'>
                                <img alt='react icon' className='icon' src={require('../images/react.png')} />
                                <img alt='rails icon' className='icon' src={require('../images/rails.png')} />
                            </div>
                            <span className='pipe'>|</span>
                            <div className='githubIcon'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/partyHostNative/"><img className='icon' alt='githubfe' src={require('../images/github-fe.png')} /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/partyHostRails"><img className='icon' alt='githubbe' src={require('../images/github-be.png')} /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://skull-solitaire.herokuapp.com/"><img className='projectImg' src={require('../images/mac-skullsolitaire.png')} alt='skullsolitaire' /></a>
                        <div className='usedIcons'>
                            <div className='langIcon'>
                                <img alt='js icon' className='icon' src={require('../images/js.png')} />
                                <img alt='rails icon' className='icon' src={require('../images/rails.png')} />
                            </div>
                            <span className='pipe'>|</span>
                            <div className='githubIcon'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/solitaire-fe"><img className='icon' alt='githubfe' src={require('../images/github-fe.png')} /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/solitaire-be"><img className='icon' alt='githubbe' src={require('../images/github-be.png')} /></a>
                            </div>
                            <span className='pipe'>|</span>
                            <div id='login'>
                                <p style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Heroku Login:</p>
                                <p>username: chelsea</p>
                                <p>password: hi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="http://lyndonart.netlify.com/"><img className='projectImg' src={require('../images/mac-lyndonart.png')} alt='lyndonart' /></a>
                        <div className='usedIcons'>
                            <div className='langIcon'>
                                <img alt='html icon' className='icon' src={require('../images/html5.png')} />
                                <img alt='css icon' className='icon' src={require('../images/css3.png')} />
                            </div>
                            <span className='pipe'>|</span>
                            <div className='githubIcon'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/lyndonart"><img className='icon' alt='github' src={require('../images/github.png')} /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.walthamvisioncare.com/"><img className='projectImg' src={require('../images/mac-wvc.png')} alt='wvc' /></a>
                        <div className='usedIcons'>
                            <div className='langIcon'>
                                <img alt='html icon' className='icon' src={require('../images/html5.png')} />
                                <img alt='css icon' className='icon' src={require('../images/css3.png')} />
                                <img alt='react icon' className='icon' src={require('../images/react.png')} />
                            </div>
                            <span className='pipe'>|</span>
                            <div className='githubIcon'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chelsme/WVC"><img className='icon' alt='github' src={require('../images/github.png')} /></a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}