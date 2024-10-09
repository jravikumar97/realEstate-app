import { Carousel as CarouselBase, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PropertyCarousel = ({ images }) => {
  return (
    <CarouselBase aria-label="Property Images">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`Property image ${index + 1}`}
              loading="lazy"
              style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }} // Set a default aspect ratio
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselBase>
  );
};

export default PropertyCarousel;
