// src/utils/ImageContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ImageContextType {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = React.useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImage должен использоваться в ImageProvider');
  }
  return context;
};
