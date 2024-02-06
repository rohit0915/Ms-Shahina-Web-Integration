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




const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510271751!2d76.76357017426172!3d28.644287354223533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694055009994!5m2!1sen!2sin";

const ADD_IMG =
  "https://s3-alpha-sig.figma.com/img/98dd/fc2d/f06d62c194cb4ca989bb188bb00bbbf3?Expires=1696809600&Signature=SSLCBfRU4BZnsWjXqd3JeCaiRXzCMOg43vaSoJJVh8vtFmbA1nOFKcVSExPIC6yxlc7vJXrv2tBlaH3ZsgJB2jAJyr7Z8btKEf7~EqjdbAnpPO1uZZH~8OvPuIJqk71nlkpheac3j~C~Rq5SZAl~TDsCDn6OQ3JL2qOrYXp57qPlJiew1l0styRya4aS5Cw1oWCUpuOHhUd2QIX5KTno3dt6QOQC9qqyQVLYYoPJ0-OeqvblKWXzjCH254egVYbVCwdXFJZqFkaUEyc1aW3tYLaAHO7kKzW2aZYa7jJTRVRg3kWjoRy5KF07psETLrYT-BHTLZmqYERFA2H3rQ~lWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const STAR = "/Image/72.png";
const MAP_IMG = "/Image/image 211.png";
const GOLD_MEDAL =
  "https://s3-alpha-sig.figma.com/img/16c1/2675/c0964da3294f9f7378d69e315d0872ba?Expires=1695600000&Signature=AuBQzDGx9hBr4FDeKAxZxvPCHHcA3TbB-nyEi0dIuRIqwIetHHkmSOQXuQfPbtU6a73Ono40QuZ60rtObZuBI-N6Z2FpMz7dHYFZFCvA-cYO6cMHXyIxoD2h3LcP5cNvAn5u9R4O~KdnkO-lySzIRXVtctV~~4eBjgfm6QgggBBjCjR8~~QqF5AQ50z5lptoNsLzDPrgsa-KFDG8Kljg2-G5Voqmn6Ow0dD4gR8N6iWHaY4F0vjNDdGKRWhZLkvQcwj0Th2I6rlbegPGKfeg4M4h6~E~ijB5qn86NGO9G0IyFLMZrOcvPmNZZqEqwfK6p-cWwt91nPqTx4gGIMGQUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SILVER_MEDAL =
  "https://s3-alpha-sig.figma.com/img/f83f/8116/eb1f3be5d9fd8c225234dc22d43bc1aa?Expires=1695600000&Signature=eXtqPtXkkqC8CD8dJylp20IdvhyxslYEHhSz7p~HAieMcD5affm36H7aJ13JucuyYKJyTdarBMI2SlY3V7FHNV6as9W~OCj2qUKojvtVI-MOWD1NTdruQJJwHLVP0CLB5dMRffNERYjXM5sJ~7offUS5d7wvxapShlkL6Mgc0cgybOoE8AOik99PezhYmS7Pq9RS4oZvmPrSjv3pqdmNULNV67o1AOqbTs2fIKdHET1uBlSj2o3C-o31pC0KWsqO2nL2~pkF5LsI3hMWrjCrgSRo4vhDQOlQQgQCfdRtqiSr3WA3O6fg1W9dMmL-b2cJ4UiQV-K7AGCrbRf-hMr61Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const PLATINUM_MEDAL =
  "https://s3-alpha-sig.figma.com/img/d30a/0549/06b85b99ec2b0e06f10f91a2b73bedfb?Expires=1695600000&Signature=hT3zjiRGN93EtmL5THGK8IwZOBac~eqYfbUTaMeFIq0C2QdtDh~yoE4rJ8IBM4KMiBmNP1hNGFfk379iJivNAYppXIrXOpGsybJGp064Pvi-QYPDB7fkgZU2RW-q0W~2P6Fs8p5soUd6KonZM4a9-P~2XdmZW81aVA-lFkCaI4cguhQpd2ewMxKxi5oqpT9b2BPWpVJMVbY~5nglyC4yqvC2rxejVcK4xDDJzFWDVXTR3DStoAbnwix87wzZS1Gd7aJOqyq89BGO1taKFNbzMXYYMtzm9DexK8XTjkl0tmx1pE3UpZmL1Dmyi1DVs5YPPv4lT6bSpVZIzhmoj3cuww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const DIAMOND_MEDAL =
  "https://s3-alpha-sig.figma.com/img/5206/5754/1695581fd19adf8ecfe70a0b621592b8?Expires=1695600000&Signature=DmbUVREkIPpH5QqpOgSlcKB57uQ7RuL0iCXDTIV-e0nrDqpFZYfLV5Vtp98ywTA0IkYreB9jOSrl-ecoaCZzCLR5YvJePjYp5Q~c7NyxNGPU5JevWERyZ8t-v46mxycHRlgXNHn7cHyt4RCPMZG3Kp0bc9NYgPhnGQv~aehalm9PgS4no3NUD19mmq77E9XXBRe2nM9VH6GfqwrYPyWaImsGq-42ipsTmp5AG1nekdC9xN7eBD2y5L9~P7NniXqw49rhNxib-oCReF0d9OSOZjTWUNcXdY21fCVHFZuzPuG0sd1Rv2z6dYx9Ovfs4pSFplWLpLvhr-KgfIYEBRhGwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const galleryImages = [
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1696809600&Signature=JeP2zUx2kgYpNxD~Z3mzBkaZ0uhxj0cAleXSYM9jTX7BJNN-dI4m3jjQyfiIhwklSrsfTBJPxwiZd7euLKExSCxENfOePstgRglFs4NRDX2b0irPFtxwzEFIyFYpoRPEFYiBcIhvOlJ11R28kpfy~k0B2uAxiByiwL88m4c3kCQjipwWVwCmcbk9bgKs7sDoYktUschbn9TURUgjcHDSv3nLzOeczUhN1kqlJvYYjmt1DY34TOFzrxYsSR8IM82WUo-ulwe~9Tv8SwVT819of9v2xN79rk-SpSZSK8a5o1zVGptZsP2gAoV~uOx02YF5OqtJ8zcaLkYUFxwNAKhvAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Jet Facial Treatment",
    src: "https://s3-alpha-sig.figma.com/img/7df6/8aca/cbcc438e39909a1787036442e14812b0?Expires=1696809600&Signature=d3i6pLiCZi3v4TjhRx4OB8C2G38kuWqL8o9AipyooRvvkPdHYbQUnE5HmiIk~DgJx40jYirT8bQAgc7h~V6MdPggB7IiyXacFLGFBYfGuaItD6IstRGflmh3jZglgQjO9vsi2i4byp4NJ7iL4vHppU5fdEKGvnbJ0VM00YY-RpeDpA9uinc68dgrTzQg1iRrXyKcD0gG85lCuyUJNncP1~1gXQBGZWSiH8Dx7j2ZeatQKFkLBXY2cXOKAYa0axsEna5Xvb9PLPYGBEgYOaIWaKVNDcg0oVj4rcVIW0zbS6SzNUzfKkzj5y-pyANqYZPB4V-YwQ7XOXu2sZVNwzOQag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/1e97/8e3b/4c32148303fff071df351690236b69c2?Expires=1696809600&Signature=gcdCm3OPRD~1QCBzmCXfhgraLHh~0qEyx3X9ToLVZc-4jNsaQtqRkAohnHKwFpVS-1l1SJg8Zq6l4FcRb-deUjzBIUKzfH7akPN25QhcHdFpOqVNb0pLxcCUrT8zrE-bqyBQT8IY4i1waWDuc8UJ2ZXKACPasod~ks3tXinaToApiObtPFxxwyPxHHbgjAgXvsvSzHYUdnXkVQLQcwS6HwjJ6evrsNlh0EvVRDjXPJVmhsYbpFRkdqjUWxMIqpvIxOIqWCeIfaLU6xIzWR97z~YZBm-~81Z9LT7EasUnkoy13RxFOtwD2xUkh3OGZTF6D-jiANyqIw4jADO4uG2JHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/66f8/4d14/301f45c11f07a57c02c725eeb70f0707?Expires=1696809600&Signature=ksywFpvEA~R7Em7lgOxrcQcSwyqcMYrrQVjijhbGPPzJ9VfcF3BrVlqzrxI81YFARl5sk2ZRSaLhyrN5zfn1DezSX188Q3N4MihELyictWAXcCWK3dF9YYYEHw8XHU1kB7OXFdDbtSNS0SKKGmXlMpX3ms3oA~XacoZWIl7hENrT1puEtXRzp8IQ4ckm9Tcv~NFcsu62aZzyKkzgBAfk2Hw3zog1MSiZ11cU3AnHh68lSbFqzhksJootvCWibJdXPLwZnx4S9x-5tOzVfx5w7jv1lteP9NF3IZir~92~SoaJsevtfJh8Lb7YrONbq-1HV8BzeJVCgB~pI~jOeANpRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/cac8/d71c/fe25002a9ed8cc49825e8ee289350281?Expires=1696809600&Signature=GqAY0Qq2UDH5ajuZacndK8Gl0-FT0V8R2nJILw8oNZXTxt7WlPnaUXZHaeLvjbfvBE~A6CtjvOF64dSkAzA8jg1-YW2Ml7hEjpDaEwNGjeA5MHrL4eLmzs7-6OfGSWl8sbf1uXThRE7QuYHn6ez4XGb20VerhovniytMtV9UEgEd5DkSbqRcQRctAm6FsRgpQGpcsM1654L9P5xcVeb9oSdpWvbXdEtadqHKGGV317Q3lDlKzvYIoY-RF8LmBWXMGyRKkBqTg-sNpbTTu~7056HkS5NMFUmNpiIElhLwJF7lR8f3GgQ9vk3BZ-VARcFQGlMyR36PJNzxfylB6G0Qzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/8622/5b26/1ebcc6a3d73293132764cd2bdbada56c?Expires=1696809600&Signature=YMcD~6RaBuAFwhKvHQ9q7Xo98G7tWYLn3SLnHA9oZ851WJRE0zCojfAjvyH2AZo1NCj0I7zQBso0cZB8Ao6yhjjveIBUWXhN-FDPINtBI8IcIMCHxBHJCph2V0PFsBU-ipEiRtMCzXlH7p1Yu7HKbRxJB6a~3JXnoIa921hXSoGwpdtOE4wBGTTUsiFgzUe3n1~Yh6g3wtxCYi213YQHgVAdxxs6-XHXcXN2qz9Q8cGqDVKv-enneiq7AcsS6ybwxitaot1wSfqQjINQ96h63dxYhnZzOuF2bF3X12rHuHM7RzMahVXul~ce1wx2r-8WU-5M~BWxoKfbGMn4tIwwkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1696809600&Signature=JeP2zUx2kgYpNxD~Z3mzBkaZ0uhxj0cAleXSYM9jTX7BJNN-dI4m3jjQyfiIhwklSrsfTBJPxwiZd7euLKExSCxENfOePstgRglFs4NRDX2b0irPFtxwzEFIyFYpoRPEFYiBcIhvOlJ11R28kpfy~k0B2uAxiByiwL88m4c3kCQjipwWVwCmcbk9bgKs7sDoYktUschbn9TURUgjcHDSv3nLzOeczUhN1kqlJvYYjmt1DY34TOFzrxYsSR8IM82WUo-ulwe~9Tv8SwVT819of9v2xN79rk-SpSZSK8a5o1zVGptZsP2gAoV~uOx02YF5OqtJ8zcaLkYUFxwNAKhvAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Jet Facial Treatment",
    src: "https://s3-alpha-sig.figma.com/img/7df6/8aca/cbcc438e39909a1787036442e14812b0?Expires=1696809600&Signature=d3i6pLiCZi3v4TjhRx4OB8C2G38kuWqL8o9AipyooRvvkPdHYbQUnE5HmiIk~DgJx40jYirT8bQAgc7h~V6MdPggB7IiyXacFLGFBYfGuaItD6IstRGflmh3jZglgQjO9vsi2i4byp4NJ7iL4vHppU5fdEKGvnbJ0VM00YY-RpeDpA9uinc68dgrTzQg1iRrXyKcD0gG85lCuyUJNncP1~1gXQBGZWSiH8Dx7j2ZeatQKFkLBXY2cXOKAYa0axsEna5Xvb9PLPYGBEgYOaIWaKVNDcg0oVj4rcVIW0zbS6SzNUzfKkzj5y-pyANqYZPB4V-YwQ7XOXu2sZVNwzOQag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/1e97/8e3b/4c32148303fff071df351690236b69c2?Expires=1696809600&Signature=gcdCm3OPRD~1QCBzmCXfhgraLHh~0qEyx3X9ToLVZc-4jNsaQtqRkAohnHKwFpVS-1l1SJg8Zq6l4FcRb-deUjzBIUKzfH7akPN25QhcHdFpOqVNb0pLxcCUrT8zrE-bqyBQT8IY4i1waWDuc8UJ2ZXKACPasod~ks3tXinaToApiObtPFxxwyPxHHbgjAgXvsvSzHYUdnXkVQLQcwS6HwjJ6evrsNlh0EvVRDjXPJVmhsYbpFRkdqjUWxMIqpvIxOIqWCeIfaLU6xIzWR97z~YZBm-~81Z9LT7EasUnkoy13RxFOtwD2xUkh3OGZTF6D-jiANyqIw4jADO4uG2JHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

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
  contactPage,
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
