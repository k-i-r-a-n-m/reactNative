export const getGoogleMapUri = ({ lat, lng }) => {
  const uri = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap
  &markers=color:red%size:mid%7C${lat},${lng}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`;

  console.log(uri);
  return uri;
};
