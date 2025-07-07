import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

interface CloudinaryImageProps {
  publicId: string;
  width?: number;
  height?: number;
  className?: string;
}

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME!,
  },
});

export default function CloudinaryImage({
  publicId,
  width = 400,
  height = 400,
  className = '',
}: CloudinaryImageProps) {
  const img = cld
    .image(publicId)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(width).height(height));

  return <AdvancedImage cldImg={img} className={className} />;
}
