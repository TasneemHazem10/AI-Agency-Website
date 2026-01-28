import { motion } from "framer-motion"; 
export default function Hero() {
   return ( <section className="pt-32 pb-20 bg-black text-white">
     <div className="max-w-5xl mx-auto text-center px-6"> 
      <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"> 
      <img src="./assets/group_profile.png" className="h-6" /> Trusted by 10k+ people </span> 
      <h1 className="text-5xl md:text-6xl font-bold leading-tight"> Turning imagination into{" "} 
        <span className="text-primary">digital</span> impact. </h1> <p className="mt-6 text-gray-400 max-w-2xl mx-auto"> Creating meaningful connections and turning big ideas into interactive digital experiences. </p> </div> 
        <div className="mt-16 max-w-6xl mx-auto px-6">
           <img src="/assets/hero_img.png" className="rounded-3xl w-full" /> 
           </div> 
           </section> );``
 }