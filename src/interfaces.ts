export interface GalleryItem {
  id: string | number; // Unique identifier for React key prop
  src: string;         // Image source URL
  alt: string;
  imageSample?: string;
  // Alt text for accessibility
  // You could add more properties like title, description, dimensions, etc.
}
