"use client";

import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Alert, // Import de Hero UI Alert
  Tooltip,
} from "@heroui/react";
import { usePathname } from "next/navigation"; // Pour obtenir la route actuelle
import { ThemeSwitch } from "./theme-switch";

export function DebuggerButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [tailwindColors, _] = useState([
    "bg-gray-90",
    "bg-gray-80",
    "bg-gray-65",
    "bg-gray-60",
    "bg-gray-50",
    "bg-gray-25",
    "bg-gray-15",
    "bg-gray-10",
    "bg-white-90",
    "bg-white-15",
    "bg-white-10",
    "bg-white-5",
    "bg-blue-75",
    "bg-blue-60",
    "bg-blue-50",
    "bg-purple-45",
    "bg-purple-40",
    "bg-purple-30",
    "bg-purple-20",
    "bg-purple-15",
    "bg-purple-10",
    "bg-pink-60",
    "bg-pink-35",
    "bg-pink-20",
    "bg-green-75",
    "bg-green-65",
    "bg-green-55",
    "bg-teal-75",
    "bg-teal-65",
    "bg-teal-60",
    "bg-teal-45",
    "bg-yellow-65",
    "bg-yellow-55",
    "bg-red-60",
    "bg-red-45",
    "bg-red-35",
    "bg-red-25",
    "bg-orange-55",
    "bg-orange-40",
    "bg-orange-25",
  ]);

  const pathname = usePathname(); // Récupère la route actuelle
  const [showAlert, setShowAlert] = useState(false); // Etat pour afficher l'alerte

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleColorClick = (colorClass: string) => {
    // Copie la couleur dans le presse-papiers
    const colorDiv = document.createElement("div");
    colorDiv.classList.add(colorClass);
    document.body.appendChild(colorDiv);

    const bgColor = window.getComputedStyle(colorDiv).backgroundColor;
    const hexColor = rgbToHex(bgColor);

    navigator.clipboard.writeText(hexColor).then(() => {
      setShowAlert(true); // Affiche l'alerte quand la couleur est copiée
      setTimeout(() => setShowAlert(false), 2000); // Cache après 2 secondes
    });

    document.body.removeChild(colorDiv); // Nettoie après utilisation
  };

  const rgbToHex = (rgb: string) => {
    const rgbArray = rgb.match(/\d+/g);
    if (!rgbArray) return "#000000";
    const [r, g, b] = rgbArray.map(Number);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  };

  // Si c'est en production, ne pas afficher le bouto
  return (
    <>
      {/* Le bouton flottant en bas à gauche */}
      <Button
        className="fixed bottom-4 left-4 p-0 h-min min-w-min bg-transparent text-default-600 z-[9999]" // Increased z-index
        variant="shadow"
        onClick={onOpen}
        radius="full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </Button>
      {/* Le Drawer contenant les informations de débogage */}
      <Drawer
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
            },
            exit: {
              x: 100,
              opacity: 0,
            },
          },
        }}
      >
        <DrawerContent>
          <DrawerBody>
            {/* Alerte Hero UI à l'intérieur du Drawer */}
            {showAlert && (
              <Alert
                isVisible={showAlert}
                onClose={() => setShowAlert(false)}
                color="success"
                className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-90 px-4 py-2 rounded-md shadow-md max-w-xs "
                
              >
                <div className="flex items-center ">
                  <span>Color copied to clipboard!</span>
                </div>
              </Alert>
            )}

            <h3 className="text-xl font-semibold mb-4">Debug Information</h3>

            {/* Informations sur la taille de l'écran */}
            <div className="mb-4">
              <h4 className="text-lg font-medium border-b-small">
                Screen Size: {screenSize.width} x {screenSize.height}
              </h4>
            </div>

            {/* Affichage des couleurs Tailwind */}
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-1">Colors:</h4>
              <div className="flex flex-wrap gap-2">
                {tailwindColors.map((colorClass, index) => (
                  <Tooltip content={colorClass} key={index}>
                    <div
                      key={index}
                      className={`${colorClass} w-10 h-10 rounded-full border border-gray-300 shadow-lg transform transition-all hover:scale-110 cursor-pointer`}
                      title={colorClass}
                      onClick={() => handleColorClick(colorClass)} // On clique pour copier
                    ></div>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Affichage de la route actuelle */}
            <div className="mb-4">
              <h4 className="text-lg font-medium border-b-small">
                Current Route: {window.location.origin}{pathname}
              </h4>
            </div>
            <div className="mb-4">
              <ThemeSwitch className="" />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button color="danger" variant="light" onPress={onOpenChange}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
