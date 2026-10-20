import Site from '../clinic-site';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return ['about','services','products','contact','cart','checkout'].map(slug=>({slug}))}
export default async function Page({params}){const {slug}=await params;if(!['about','services','products','contact','cart','checkout'].includes(slug))notFound();return <Site page={slug}/>}
