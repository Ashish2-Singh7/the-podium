
import cloudinary from '@/lib/cloudinary';


export async function uploadToCloudinary(file: string, folder: string) {
  const result = await cloudinary.uploader.upload(file, {
    folder,
    resource_type: 'image',
  });
  return result.secure_url;
}


export async function uploadFeaturedImageToCloudinary(file: string, folder: string) {
  const result = await cloudinary.uploader.upload(file, {
    folder,
    resource_type: 'image',
  });
  return result.secure_url;
}