const shopMenu = [
  "Skin Type",
  "Product Type",
  "Brands",
  "Skin Conditions",
  "Nutrition",
];
const skinType = [
  {
    src: "/Image/41.png",
    type: "Dry Skin",
  },
  {
    src: "/Image/42.png",
    type: "Oily Skin",
  },
  {
    src: "/Image/43.png",
    type: "combination",
  },
  {
    src: "/Image/44.png",
    type: "Normal",
  },
];

const productType = [
  {
    src: "/Image/45.png",
    type: "Moisturizers",
  },
  {
    src: "/Image/46.png",
    type: "Serums",
  },
  {
    src: "/Image/47.png",
    type: "Cleansers",
  },
  {
    src: "/Image/48.png",
    type: "Sun Protections",
  },
  {
    src: "/Image/49.png",
    type: "Toners",
  },
];
const brands = [
  {
    src: "/Image/50.png",
    type: "DMK Products",
  },
  {
    src: "/Image/51.png",
    type: "Face Reality",
  },
  {
    src: "/Image/52.png",
    type: "Reveskin",
  },
  {
     src: "/Image/53.png",
    type: "CloveHill Spupplements",
  },
  {
    src: "/Image/54.png",
    type: "Skinbetter Science",
  },
  {
      src: "/Image/55.png",
    type: "Revela",
  },
];

const skinConditions = [
  {
 src: "/Image/56.png",
    type: "Aging",
  },
  {
 src: "/Image/55.png",
    type: "Pigmentation",
  },
  {
 src: "/Image/55.png",
    type: "Acne",
  },
  {
 src: "/Image/55.png",
    type: "Rosacea",
  },
  {
 src: "/Image/55.png",
    type: "Sensitive",
  },
];

const nutrition = [
  {
    src: "https://s3-alpha-sig.figma.com/img/9aee/63a2/06983d8d20a6781e7df021f58edf2ddc?Expires=1696204800&Signature=BzVEDF-R9Mj8O7PG4d6Mw5A52R2VoK3~KHU9dZGQpLeP5MEsp51HxLtaiqq4C5l-eNfbbXohvzRYUZb89twhAw~UdTkTlZOldXaacjIWiJIgzI1Q8d8Q-Tkx6gkVlOwlAzxcAzEZBwEWVE2WhlDcErwI2ASj-rh~ng56xzG5LntRHQHDZKUQJ9L3h7CEt7KeZZfEHBotnhls-ym4KjaOzUwlPp3xYCBYVyILBaycof1KjlTegCZg3ESW2khrWlwAfZnujtQWtjZiCxfvYYWyLP6ERh7P8Vino9T~GgU5u9lwmVxgVR~QV77ek2JW5tGmC2op3ZJaj0CQAPdajeI4fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Skin Health",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/99fd/2da8/d67f43da6bfc1d103f7445d4077c09e5?Expires=1696204800&Signature=q56PL3tmGGZH-GN0LdF~Yxe4ExPMHUIW7T~NBiadkM1AFtLYDtlhj80d1Uiu8COmooKaVSbv602OSmB9gkVhkhyhSbV-kY8hx5UmK093W-8cOvAHdLITF3dfZ4NdqVCastM~CO2iE7sh3RZQ3EcSTJymUljjLP1CPrMINmMxd0dMlKREEItlp4b~pykAAHnpQ5smWwx0-fD8m5IeQPg5SyuJcbDu6FT6wQQ2TY-3smIX-GucZW4He8HiK7LxDDBSy5WAkUridl05~2qEUkhCwTva3fyuES8w6E-G-TCgHLQr-1Temn89xClwXAeyA8L3I5hMe6rjyocfS3qYiulljw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Immune Booster",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/2b06/91db/94e8eb4b38e3d54793d36f42ee08d405?Expires=1696204800&Signature=OFsdjpu5mPlcYbMKBk-uTx7BRwNCjUwRXexqmDurWpWvgZRxRMUgLU06xV~Agj3lKXjNxiC9l9KWN-uVuoKKBnMyYk71eIltCtf2SgTuTyXlIhFNor4RXcb~c7X1nGGLc-14NOwpnXln75b~OU25Xb63LfSGW-AMAhXAZekcOi15pzHs8PjCXaMOLFLlfFsuqo2yBBkxDfXSWQwr3jWJzVxGBiqvT3EMJLyxVeIsOITak2Wcj-l5tf-f~KF1vb5CFRqiRa8im2msDvNw61UeTciVQRy34l1poiGeeL9Wa4~5cm1dhVnaMPzEoMYNzBl-XfaC0X7NzL8mOLFN6hp7dQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Hormone Balance",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/03d9/6925/095f8c93f5dd75b67416b427dddd5bcc?Expires=1696204800&Signature=pVLAS7nMn8Q2SPzgKan7XSjcQDSd11SfqNb4fCIXXWbmFCP4-GalesdGuyiGCLbsBg~NrmmUbd90Rb9vITodwVWquppFHd8wBd05u6liu6Vb9UPVHietUxXZRZMgENoiDEAw3YdAQqMEaBkyLMNk5xM3VmEwknChNKH2M2kdwnlpfByYDuaAULK7svM8ctzLpYPJOHHmclkejfTlbGtN8MOypAHGR8ANsNJDyHOAsoMol2jpQIvFbtzXiM5hGfQvTMV7c4KYTTw5F9-W8KrAV1GBfALz4Fm0DF9Gy3Ge1czJr0cFAiZociwwK0IBnHyVbLlSqbERNx-D9zVSBRuTfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Digestive Support",
  },
];

export { shopMenu, skinType, productType, brands, skinConditions, nutrition };
