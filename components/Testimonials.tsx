import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Saravanan RK",
    role: "CEO of AIRTON",
    company: "AIRTON",
    testimonial: "Aravindselvan's contribution was simply awesome! He brought a fresh perspective to our blockchain project and consistently delivered innovative solutions that exceeded our expectations. A valuable team player.",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/src/assets/Saravanan.jpg"
  },
  {
    name: "Vasanth K",
    role: "CFO of AIRTON",
    company: "AIRTON",
    testimonial: "Working with Aravindselvan has been a game-changer. He's an innovative thinker who is always looking for ways to improve our project. His technical skills and collaborative spirit made him a joy to work with.",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/src/assets/Vasanth.jpg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Testimonials
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400">Feedback from leadership</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative bg-[#050516] p-8 rounded-3xl border border-white/5 hover:border-neon-blue/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
          >
            {/* White Quote Icon */}
            <div className="mb-6">
              <Quote className="w-8 h-8 text-white fill-white" />
            </div>

            {/* Testimonial Content */}
            <p className="text-white text-base leading-relaxed mb-8 flex-grow font-medium">
              {test.testimonial}
            </p>
            
            {/* Footer with Name/Role and Image */}
            <div className="flex justify-between items-end border-t border-white/5 pt-6">
               <div className="flex flex-col">
                 <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-1">
                   <span className="text-neon-blue">@</span> {test.name}
                 </h4>
                 <p className="text-slate-400 text-sm">{test.role}</p>
               </div>
               
               <div className="relative">
                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${test.name}&background=random`;
                      }}
                    />
                 </div>
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;