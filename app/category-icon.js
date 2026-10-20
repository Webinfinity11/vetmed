import {Cookie,Pill,Scissors,Sparkles,Bone,Grid2X2} from 'lucide-react';

const fallback={snacks:Cookie,medicine:Pill,grooming:Scissors,hygiene:Sparkles,toys:Bone};
function Paw(){return <g fill="currentColor" stroke="none"><ellipse cx="13" cy="12" rx="1" ry="1.4"/><ellipse cx="16" cy="11.5" rx="1" ry="1.4"/><ellipse cx="19" cy="12" rx="1" ry="1.4"/><path d="M12.8 16c0-1.2 2-2.8 3.2-2.8s3.2 1.6 3.2 2.8c0 1.8-2 1-3.2 1s-3.2.8-3.2-1Z"/></g>}
const drawings={
 dry:<><path d="M5 16h22l3 10H2Z M7 16a4 4 0 0 1 6-5 4 4 0 0 1 7-2 4 4 0 0 1 6 7 M12 15a3 3 0 0 1 6 0"/><g transform="translate(0 10) scale(1 .75)"><Paw/></g></>,
 wet:<><path d="M7 4h18l-1 5 3 19H5L8 9Z M8 8h16 M22 10l2 15 M9 4V2m4 2V2m4 2V2m4 2V2"/><g transform="translate(-3 0) scale(1.2)"><Paw/></g></>,
 collars:<><ellipse cx="16" cy="9" rx="13" ry="5"/><path d="M3 9v9c0 3 6 5 13 5s13-2 13-5V9 M6 12v8m20-8v8"/><rect x="11" y="13" width="10" height="8" rx="1.5"/><path d="M16 15v4m0 4v2"/><circle cx="16" cy="27" r="3"/></>,
 bowls:<><path d="M3 14h24l-3 12H6Z M6 14a4 4 0 0 1 6-5 4 4 0 0 1 7 0 4 4 0 0 1 5 5 M24 14l5-10 M7 29h16"/><path d="M10 11h.01m6 0h.01"/></>,
 beds:<><path d="M3 12c0-5 26-5 26 0v12c0 5-26 5-26 0Z M3 13c2-3 7-3 8 1l1 4h8l1-4c1-4 6-4 8-1 M8 13V9m16 4V9 M12 23h8"/><path d="M6 20c1-2 3-3 5-3m10 0c2 0 4 1 5 3"/></>,
 carriers:<><path d="M4 15 7 6h18l3 9 M12 6V3h8v3 M4 18l2 11h20l2-11 M10 9v3m6-3v3m6-3v3"/><rect x="2" y="15" width="28" height="3" rx="1.5"/><g transform="translate(0 10)"><Paw/></g></>
};
export default function CategoryIcon({id}){
 const drawing=drawings[id];
 if(!drawing){const Icon=fallback[id]||Grid2X2;return <Icon size={19} aria-hidden="true"/>}
 return <svg width="19" height="19" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawing}</svg>;
}
