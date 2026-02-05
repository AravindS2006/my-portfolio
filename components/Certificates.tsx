import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certification } from '../types';
import { Award, ZoomIn, X, ExternalLink } from 'lucide-react';

const certifications: Certification[] = [
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    date: "Mar 2024",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/1.png"
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "Aug 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/2.png"
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Sep 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/3.png"
  },
  {
    name: "Cyber Space Competitions",
    issuer: "ISRO",
    date: "2020",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/4.png"
  },
  {
    name: "AI For India 2.0",
    issuer: "GUVI",
    date: "Aug 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/5.png"
  },
  {
    name: "Global Summit for Career & Skill Development",
    issuer: "GELP",
    date: "2024",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/6.png"
  },
  {
    name: "Web Development Internship",
    issuer: "Prodigy InfoTech", 
    date: "Dec 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/7.png"
  },
  {
    name: "Advanced Cpp Training",
    issuer: "IIT Bombay",
    date: "Dec 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/8.png"
  },
  {
    name: "Data Science with Python",
    issuer: "SkillUp",
    date: "Aug 2023",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/9.png"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    image: "https://raw.githubusercontent.com/AravindS2006/my-portfolio/main/public/asts/certificates/10.png"
  }
];

interface CertificateCardProps {
  cert: Certification;
  index: number;
  onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, index, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-card-bg rounded-xl overflow-hidden border border-white/5 hover:border-neon-blue/40 transition-all duration-300 shadow-lg cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative aspect-[1.4/1] overflow-hidden bg-dark-bg/50">
        {!imgError ? (
          <img 
            src={cert.image} 
            alt={cert.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 p-4 text-center">
            <Award className="w-12 h-12 text-slate-600 mb-2" />
            <span className="text-xs text-slate-500">Image not found</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ZoomIn className="text-neon-blue w-8 h-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow bg-card-bg relative z-10 border-t border-white/5">
        <h3 className="text-white font-bold text-sm leading-tight mb-2 line-clamp-2">{cert.name}</h3>
        <div className="mt-auto flex justify-between items-end">
           <span className="text-neon-blue text-xs font-mono">{cert.issuer}</span>
           <span className="text-slate-500 text-[10px]">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
          <span className="text-neon-blue">05.</span> My Certificates
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400">Credentials & Continuous Learning</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <CertificateCard 
            key={index} 
            cert={cert} 
            index={index} 
            onClick={() => setSelectedCert(cert)} 
          />
        ))}
      </div>

      {/* Modal for viewing certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-card-bg rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-1 overflow-auto max-h-[85vh]">
                 <img 
                   src={selectedCert.image} 
                   alt={selectedCert.name}
                   className="w-full h-auto rounded-xl"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Certificate+Image+Not+Available";
                   }}
                 />
              </div>
              
              <div className="p-4 bg-dark-bg border-t border-white/10 flex justify-between items-center">
                 <div>
                    <h3 className="text-white font-bold">{selectedCert.name}</h3>
                    <p className="text-neon-blue text-sm">{selectedCert.issuer}</p>
                 </div>
                 {/* Fallback download/view original link if needed */}
                 <a 
                   href={selectedCert.image} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
                 >
                   <ExternalLink className="w-4 h-4" /> Open Original
                 </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;