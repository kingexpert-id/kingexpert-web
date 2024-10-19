export const handleCallWhatsapp = () => {
  const phoneNumber = "6282384317274";
  const message = encodeURIComponent("Hi Kingexpert!");
  const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  window.open(whatsappApiUrl, "_blank");
};

export const handleOpenInstagram = () => {
  const instagramUrl = "https://www.instagram.com/kingexpert.id/";

  window.open(instagramUrl, "_blank");
};

export const handleOpenPricing = () => {
  const docsUrl =
    "https://drive.google.com/drive/folders/1_BlZ-DqzML-mE8zfzsSQYOjzhD52bVpQ";

  window.open(docsUrl, "_blank");
};

export const handleOpenEventList = () => {
  // TODO change link, this is same with above
  const docsUrl =
    "https://drive.google.com/drive/folders/1_BlZ-DqzML-mE8zfzsSQYOjzhD52bVpQ";

  window.open(docsUrl, "_blank");
};
