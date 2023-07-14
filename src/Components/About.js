import React, { useEffect } from "react";
import { Termynal } from "../teminal";


const About = ({ data, info }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

useEffect(() => {
   new Termynal('#termynal', {
    typeDelay: 40,
    lineDelay: 700,
    lineData: [
      { type: 'input', prompt: '▲', value: 'yarn esbuild --bundle --outdir=Hopies.js' },
      { value:    "I love writing codes and create user-friendly products that everyone enjoys using them."},
      { type: 'input', prompt: '▲', value: 'electron-forge package ' },
      { value:    "I always try to learn new techs and share my knowledge with others. to achieve this, I challenge myself in various projects. I would be happy if I could help you with your projects" },
      // { type: 'input',  typeDelay: 1000, prompt: '(y/n)', value: 'y' },
      // { type: 'progress', progressChar: '·' },
      // { value: 'Uninstalled \'react\'' },
      // { type: 'input', prompt:'▲', value: 'node' },
      // { type: 'input', prompt: '>', value: `Array(5).fill('🦄 ')` },
      // { value: `['🦄', '🦄', '🦄', '🦄', '🦄']` },
      // { type: 'input', prompt: '▲', value: 'cd ~/repos' },
      // { type: 'input', prompt: '▲ ~/repos', value: ' git checkout branch master' },
      // { type: 'input', prompt: '▲ ~/repos (master)', value: 'git commit -m \'Fix things\'' },
    ]
  });

 
}, [])


  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Mahmoud's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
<div className="bodys">

          <div
            id="termynal"
            data-termynal
            data-ty-typeDelay="70"
            data-ty-lineDelay="700"
          >
            <span data-ty="input">which node </span>
            <span data-ty="progress"></span>
            <span data-ty>{bio}</span>
            <span data-ty="input">npm i dgree --save</span>
            <span data-ty="progress"></span>
            <span data-ty>{data?.info1 ? data?.info1 : " "}</span>
            <span data-ty></span>
            <span data-ty="input">php artisan xp:show</span>
            <span data-ty="progress"></span>
            <span data-ty>{data?.info2 ? data?.info2 : " "}</span>
            <span data-ty></span>
            <span data-ty="input">php artisan livewire: make ShowDetails</span>
            <span data-ty="input" data-ty-prompt=">>>">
            {data?.info3 ? data?.info3 : " "}
            </span>
            <span data-ty="input" data-ty-prompt=">>>">
            {data?.info4 ? data?.info4 : " "}
            </span>

          </div>
          </div>
        

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
