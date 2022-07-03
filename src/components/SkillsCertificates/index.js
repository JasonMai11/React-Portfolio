import './index.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import MCcube from '../../assets/images/minecraft-cube.gif';
import {Animator, batch, Fade, FadeIn, FadeOut, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, Zoom} from 'react-scroll-motion';

function SkillsCertificates(){
  return (
    <div className = "container SkillsCertificates-page">
      <ScrollContainer>
        <img src = {MCcube} className = "mcCube" alt = "minecraft cube"></img>
        <ScrollPage page = {0}>
          <Animator animation = {batch(Sticky(), Fade(), MoveOut())}>
            <h2>Let me show you a scroll animation</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page = {1}>
          <div style = {{display: "flex", justifyContent: "center", alignItems :"center"}}>
          <Animator animation = {batch(FadeIn(),MoveIn(600,100), MoveOut())}>
            <h2>Call of Duty -- Valorant -- League of Legends -- Fall Guys -- Among Us -- Destiny 2 -- MineCraft -- Fortnite</h2>
          </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );

}
export default SkillsCertificates;