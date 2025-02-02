import {
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  FacebookBlack,
  InstagramBlack,
  TwitterBlack,
  WhatsappBlack,
  Location,
  Mail,
  Payment,
  Contact,
} from "../assets";

// Social Media Links , phone numbers, email addresses... etc
const facebook = "https://facebook.com";
const instagram = "https://instagram.com";
const twitter = "https://twitter.com";
const whatsapp = "https://whatsapp.com";
const address = "123 Main St, Anytown, USA";
const email = " W6S7M@example.com";
const contactNumber = "123-456-7890";
const whatsappNumber = "123-456-7890";

// Footer Info
export const socialMedia = [
  {
    icon: Facebook,
    link: facebook,
  },
  {
    icon: Instagram,
    link: instagram,
  },
  {
    icon: Twitter,
    link: twitter,
  },
  {
    icon: Whatsapp,
    link: whatsapp,
  },
];

export const socialMediaForContactPage = [
  {
    icon: FacebookBlack,
    link: facebook,
  },
  {
    icon: InstagramBlack,
    link: instagram,
  },
  {
    icon: TwitterBlack,
    link: twitter,
  },
  {
    icon: WhatsappBlack,
    link: whatsapp,
  },
];

export const contactUs = [
  {
    icon: Location,
    text: address,
  },
  {
    icon: Mail,
    text: email,
  },
  {
    icon: Contact,
    text: contactNumber,
  },
  {
    icon: Whatsapp,
    text: whatsappNumber,
  },
];
