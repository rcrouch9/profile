'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, FileText, Mail, Copy, Check, Download, ScanEye } from "lucide-react";

export default function Menu() {

  const [copied, setCopied] = useState(false);
  const email = "russcrouch9@gmail.com";

  const primaryColor = "var(--primary-color)";

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkTiles = [
    { label: "GitHub", url: "https://github.com/rcrouch9", icon: <Github size={20} /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/russell-crouch-70276b310/", icon: <Linkedin size={20} /> },
    { label: "CV", url: "/2026_resume.pdf", icon: <FileText size={20} />, isCV: true },
    { label: "Contact", url: null, icon: <Mail size={20} />, isContact: true },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      {linkTiles.map((tile, i) => (
        <motion.div
          key={i}
          initial="initial"
          whileHover="hovered"
          className="relative flex items-center justify-end"
        >
          {(tile.isContact || tile.isCV) && (
            <motion.div
              variants={{
                initial: { width: 0, opacity: 0, x: 20 },
                hovered: { width: tile.isCV ? 200 : 200, opacity: 1, x: 0 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 40 }}
              style={{ borderColor: primaryColor }}
              className="absolute right-full h-18 bg-white border-2 rounded-l-md flex items-center px-4 shadow-xl overflow-hidden whitespace-nowrap pointer-events-auto"
            >
              {tile.isContact ? (
                <>
                  <div className="flex flex-col mr-4">
                    <span className="text-[10px] text-gray-400 uppercase">Email Me</span>
                    <span style={{ color: primaryColor }} className="text-xs font-bold">{email}</span>
                  </div>
                  <button onClick={copyToClipboard} className="p-2 rounded-full transition-colors hover:bg-gray-50">
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} style={{ color: primaryColor }} />}
                  </button>
                </>
              ) : (
                <div className="flex gap-2">
                  <a href="/2026_resume.pdf" download className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <Download size={16} style={{ color: primaryColor }} className="mr-2" />
                    <span style={{ color: primaryColor }} className="text-xs font-bold">Download</span>
                  </a>
                  <a href="/2026_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <ScanEye size={16} style={{ color: primaryColor }} className="mr-2" />
                    <span style={{ color: primaryColor }} className="text-xs font-bold">View</span>
                  </a>
                </div>
              )}
            </motion.div>
          )}

          <motion.a
            href={tile.url ?? "#"}
            target={tile.url ? "_blank" : "_self"}
            style={{ borderColor: primaryColor }}
            className="h-18 w-18 rounded-md border-2 bg-white flex items-center justify-center pointer-events-auto cursor-pointer relative z-10"
            variants={{
              initial: {
                scale: 1,
                color: primaryColor,
                backgroundColor: "#ffffff"
              },
              hovered: {
                scale: 1.1,
                backgroundColor: primaryColor,
                color: "#ffffff"
              }
            }}
          >
            {tile.icon}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}