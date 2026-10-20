import './kalandadze.css';
import {CartProvider} from './commerce';
import Preloader from './preloader';
export const metadata={icons:{icon:[{url:'/favicon.ico?v=2',sizes:'any'},{url:'/favicon-clinic.png?v=2',type:'image/png',sizes:'64x64'}]},title:'Pet Land | ზოომაღაზია ქუთაისში',description:'Pet Land — საკვები, მოვლის საშუალებები და აქსესუარები ქუთაისში, კალანდაძის ვეტ კლინიკასთან. წერეთლის 21.'};
export default function Layout({children}){return <html lang="ka"><body><CartProvider><Preloader/>{children}</CartProvider></body></html>}
