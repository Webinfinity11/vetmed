'use client';
import {useEffect,useState} from 'react';

export default function Preloader(){
 const [phase,setPhase]=useState('loading');
 useEffect(()=>{
  let alive=true,exitTimer;
  try{if(sessionStorage.getItem('kalandadze-intro')){setPhase('done');return}sessionStorage.setItem('kalandadze-intro','1')}catch{}
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){setPhase('done');return}
  const finish=()=>{if(!alive)return;setPhase('leaving');exitTimer=setTimeout(()=>{if(alive)setPhase('done')},420)};
  const maxTimer=setTimeout(finish,2400);
  const minimum=new Promise(resolve=>setTimeout(resolve,800));
  Promise.all([minimum,document.fonts.ready]).then(()=>{if(alive){clearTimeout(maxTimer);finish()}});
  return()=>{alive=false;clearTimeout(maxTimer);clearTimeout(exitTimer)};
 },[]);
 if(phase==='done')return null;
 return <div className={'site-preloader '+(phase==='leaving'?'is-leaving':'')} role="status" aria-label="საიტი იტვირთება">
  <div className="loader-scene"><svg viewBox="0 0 280 160" fill="none" aria-hidden="true">
   <ellipse cx="126" cy="140" rx="84" ry="5" fill="#163f40" opacity=".07"/>
   <g className="loader-cat" stroke="#163f40" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path className="cat-tail" d="M72 118C30 116 29 67 48 64C63 62 57 85 47 84"/>
    <path d="M75 133C62 114 65 92 87 83C105 72 132 91 141 116L148 134Z" fill="#c4dcca"/>
    <path d="M88 88L82 51L99 61Q115 52 131 61L147 48L147 83Q145 103 118 104Q99 105 88 88Z" fill="#e5eddb"/>
    <path d="M99 78l5 2m24-2-5 2m-10 7 4 3 4-3m-17 3-20-2m20 7-19 4m42-9 19-3m-19 8 19 4" strokeWidth="2.5"/>
    <path d="M86 115v19h18"/><path className="cat-paw" d="M130 114q17 10 39 0q9-4 12 2q3 7-10 11l-28 6" fill="#c4dcca"/>
   </g>
   <g className="loader-ball"><circle cx="213" cy="125" r="14" fill="#d69b68"/><path d="M202 117q16 0 20 15m-21-4q12-9 23-6" stroke="#faf9f5" strokeWidth="2"/></g>
   <path className="play-spark" d="m188 87 3-9m10 13 8-5m-25-5-5-6" stroke="#65ac82" strokeWidth="3" strokeLinecap="round"/>
  </svg><span>PET LAND</span><div className="loader-track"><i/></div></div>
 </div>
}
