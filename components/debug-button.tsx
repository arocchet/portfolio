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

  // Si c'est en production, ne pas afficher le bouton
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <>
      {/* Le bouton flottant en bas à gauche */}
      <Button
        className="fixed bottom-4 right-10 shadow-md p-0 h-min min-w-min dark:bg-gray-80 light:bg-white-900"
        variant="shadow"
        onClick={onOpen}
        radius="full"
      >
        <svg role="img" width="30px" viewBox="0 0 18 18" aria-label="icon">
          <g fill="white">
            <path
              d="M9 0C4.02946 0 0 4.02946 0 9C0 13.9705 4.02946 18 9 18C13.9705 18 18 13.9705 18 9C18 4.02946 13.9718 0 9 0ZM9 16.6334C4.78429 16.6334 1.36659 13.2157 1.36659 9C1.36659 4.78429 4.78429 1.36659 9 1.36659C13.2157 1.36659 16.6334 4.78429 16.6334 9C16.6334 13.2157 13.2157 16.6334 9 16.6334ZM9.72646 5.23201C9.72646 5.6304 9.44648 5.95971 8.9815 5.95971C8.55722 5.95971 8.27354 5.6304 8.27354 5.23201C8.27354 4.82993 8.57325 4.50308 9.00247 4.50308C9.43168 4.50308 9.724 4.82253 9.72646 5.23201ZM8.41661 13.4969V7.05372H9.58216V13.4969H8.41661Z"
              fill="var(--neutral)"
            ></path>
          </g>
        </svg>
      </Button>

      {/* Le Drawer contenant les informations de débogage */}
      <Drawer
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
              <h4 className="text-lg font-medium">Screen Size:</h4>
              <p>
                {screenSize.width} x {screenSize.height}
              </p>
            </div>

            {/* Affichage des couleurs Tailwind */}
            <div className="mb-4">
              <h4 className="text-lg font-medium">Colors:</h4>
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
              <h4 className="text-lg font-medium">Current Route:</h4>
              <p>{pathname}</p>
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
