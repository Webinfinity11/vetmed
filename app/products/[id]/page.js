import Site from '../../clinic-site';
import data from '../../client-data.json';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return data.products.map(p=>({id:p.id}))}
export async function generateMetadata({params}){const {id}=await params;const p=data.products.find(p=>p.id===id);return {title:p?p.name+' | Pet Land':'Pet Land'}}
export default async function Page({params}){const {id}=await params;const p=data.products.find(p=>p.id===id);if(!p)notFound();return <Site page="product" product={p}/>}
