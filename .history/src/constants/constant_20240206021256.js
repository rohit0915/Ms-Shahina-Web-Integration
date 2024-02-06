/** @format */

import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";




const pictures = [
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704973978/387266794_1344083136235029_9037499935939544718_n_hbm7z6.jpg",
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704974394/347446893_230912729567472_4221892920201154758_n_j35lj9.jpg",
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704974433/336341122_651945960030946_984594873633941470_n_akn5uy.jpg",
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704974708/128429000_3651699944852390_7674605684330988398_n_czgxaj.jpg",
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704974548/290646052_143516335003230_5985325684528727900_n_qkzapb.jpg",
  "https://res.cloudinary.com/djgrqoefp/image/upload/v1704292991/shahina/images/product/pbvlbxx4mbkkssvk7zhd.jpg",
  "https://res.cloudinary.com/dbcnha741/image/upload/v1704974600/289670231_435013454860397_6099089337535446379_n_u8ik6l.jpg",
];

const paymentCards = [
  "/Image/Rectangle 4431.png",
  "/Image/Rectangle 4432.png",
  "/Image/image 246.png",
  "/Image/image 247.png",
  "/Image/Mask group.png",
];

const STAR = "/Image/72.png";
const MAP_IMG = "/Image/image 211.png";




const PAYMENT_TYpes = [
  {
    type: "Quick Applications",
    src: "/Image/image 216.png",
  },
  {
    type: "Flexible Payment Options",
    src: "/Image/image 217.png",
  },
  {
    type: "No Hard Credit Check",
    src: "/Image/image 218.png",
  },
  {
    type: "High Approval Rate",
    src: "/Image/image 220.png",
  },
];

const financialSituation = [
  { icon: "/Image/555.png", value: "OKAY" },
  {
    icon: "/Image/Mask group (1).png",
    value: "GOOD",
  },
  { icon: "/Image/Mask group (2).png", value: "GREAT" },
];

const testimonials = [
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
];

const SERVICE_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/efd9/806b/22695128354bc21a01db7664dde7431c?Expires=1696809600&Signature=Zs9BmIdnbGHZLQC~ei5PzTAZVP462Ae37N-xNrqJrJngOl3HkedUkDBDzdKPQ9QF5ahMkMDlo0sP69J0v3prd4MhJSp6xPwMhIQpfTwP7uXp99URRoVtiXU-eOgznL8WMuJogq~Hzy7Qyvc1BTl7nZRQI5Gc-Io0QZSetgZMeyJ0q2MK-xv-AF1HFbqUq42uZj3biKCP02vqIzbta9aXuTeU3RkdhVUEkowc0o8DodII3rK2jqo1YwDr~BNGJr4Zs-55Kvhw~Z5gBZIJQOmyabbeC0TKNnMsXjypITOzYvK0z6u6L7DoesDIwtcxPYhx0GIbjiYrf5ZlhsFN7AHz2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SHOP_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/268d/24ba/bb48b7bd0d95329554b1742720841d8d?Expires=1696204800&Signature=nat7T8YaCWMkpumh8Qgf6-fDIQEz3f7RttC9cira-fzvYTzelhoFfK5YDiyMnGg-ncpd0cbKgFyRTrdivHcYIaKJfJsHfBiqX~MfSf5JDJnVFyLTdVeOMwKwZSbe1WoxL8HyteWmQDiXgbZfqewZwy5NWMir2hxMV9OkLQh4EbkoTt102nNA93ShDS5KeUfJbC1f8yc0Bl10y76hMrML51SyT-xIQlytCPd8czbiiDJg9I6lHgmeQdSVcJYbPDLbRFT5QvtfE9p3TWzWMRoBNTmJC0z~u4dNNXt391N5xaaTW-4Autu8euTLco8~T15uxJfBMWY96KdQPoQDUmZREg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
export {
  SERVICE_HEAD_IMAGE,
  SHOP_HEAD_IMAGE,
  pictures,
  paymentCards,
  MAP_URL,
  ADD_IMG,
  STAR,
  MAP_IMG,
  GOLD_MEDAL,
  SILVER_MEDAL,
  PLATINUM_MEDAL,
  DIAMOND_MEDAL,
  galleryImages,
  PAYMENT_TYpes,
  financialSituation,
  testimonials,
};
