import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/partials/_tabs.scss';

export default function Tabs() {

  return (
    <div className="nav__container">
        <div className="repo__details">
            <div>
                <span>facebook/react</span>
            </div>
            <div className="repo__stats">
                <div><span className="repo__stat__name"><i className="fa fa-eye" />Watch</span><span className="count">6658</span></div>
                <div><span className="repo__stat__name"><i className="fa fa-star" />Star</span><span className="count">1231</span></div>
                <div><span className="repo__stat__name"><i className="fa fa-code-fork" />Fork</span><span className="count">1234</span></div>
            </div>
        </div>
        <ul className="tab__list">
          <li><NavLink className="tab" activeClassName="tab__active" to="/code">Code</NavLink></li>
          <li><NavLink className="tab" activeClassName="tab__active" to="/issues">Issues</NavLink></li>
          <li><NavLink className="tab" activeClassName="tab__active" to="/pull-request">Pull Request</NavLink></li>
          <li><NavLink className="tab" activeClassName="tab__active" to="/project">Project</NavLink></li>
      </ul>
    </div>
  );
}