import {useEffect, useState} from 'react';
import '../../css/pages/components/ToTopButton.css';

const BackToTop = () => {

    const [toTop, setToTop] = useState(false);
    useEffect(() => {
       const handleScroll = () => {
           setToTop(window.scrollY > 200);
       };

       window.addEventListener('scroll', handleScroll);
       return () => {
       window.removeEventListener('scroll', handleScroll);
       };
    }, []);
   
   const scrollToTop = () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth',
       });
   };
   
   return (
       <>
       {toTop && (
           <button onClick={scrollToTop} className="to-top">&#11014;</button>
       )}
       </>
   );
   } 
   
   export default BackToTop;
   
