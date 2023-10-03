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
    src: "/Image/49.png",
    type: "Reveskin",
  },
  {
     src: "/Image/49.png",
    type: "CloveHill Spupplements",
  },
  {
    src: "/Image/49.png",
    type: "Skinbetter Science",
  },
  {
      src: "/Image/49.png",
    type: "Revela",
  },
];

const skinConditions = [
  {
    src: "https://s3-alpha-sig.figma.com/img/ccf8/68cc/af75195a9556cf4d3a415d658062de0e?Expires=1696204800&Signature=QzBIMarA4E4uohtzUSGpuFExdbga67vrkyzQ4oNruoBNAZffHiygMq~lrSZSgGlQZTjlfScoGojLCmgeZhsvkPUN4oLjRZLFS9s0xQ~YedXtNmu98TL4BfUlag-KeL2vI2P2ix4wcLUgH-p~FRJy4QDQ60f7u7vTRCxYFQFZ65fuygmfC7~YRE2NQtHWzSoS6RrGLrnh01~fkCrs9kGTtscxgw4bm9IfRmmtsBzCTwvS~XEV-lwbQkSwy8uhNbuoDZuMGNlsOV~2yDGkIdSYZKepXaX9Pt89iSl56KOqZT7RUX5IrJRbcnYQCgSIl3xwnglWQ~6192U2tIvFwyeuvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Aging",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8500/a542/35fccc4df2fa5858688276e69c2d0416?Expires=1696204800&Signature=d9GmHF3WTpBMjxPE8w8WL4HFyaDwGcxmHl~qnP0LSDjWf7JmfuXmR3LtDt7DWj4Ki~7J1XabW6Ghsn~~98tFsBcezUiFOIj6zxAWodRpj~1M~VEIUbvIjE~T~nDAur6EL6TcvgSTABdHi-cf1GLeglhnwSB3I-o~obsa0BkalhYX-Ob1CTS6ozUCCy~9XPbQOTXz4tPfR8OWXip19dVh32a9F2EVl~qRx8zzJvS4N921i2e2ABD96J-aVp8UYxO4jni~frMXnjAsLFYyES32c1-Dwb2d9FjKqs8tiJPLcubtX1iBum6vcpCVLwlt6wqdDvPNryYzEGn0B8QDqrJk8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Pigmentation",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/ef9e/34da/4a84588380afc366ae2d19ef5aa157f5?Expires=1696204800&Signature=Z764DT7t8-FnJO3UDqE39lCIYiEHjbc9ramI7i7tpvuCF6OtNHhB6Ha6DtiJQG5nJmzQn8XyRPak8hyJipq5LBeDxsAKZVrFyKF7Y7Rom9EUUByVOwaMO~qa3cxGTZJE5YdO9fQVlt4R-PBuYf9rpQp91ZSRQ5DgAHy0y14Jz8PrbIg~mMhLgv03eGcDLI7qxEb-ystzYPwdoaeERxSfWY1c6nFxV8j7SiaJW2Uy58edHyMrzYylgEA9wv6Iz0BAqO94XJQdwKX84XR~YYRUQcHhhZx4cdX804Pqx0PeGXa7JZyTd54wLEANeZ1u7bOCXkdpvn7skqTSJ7~REKfKXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Acne",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6952/4848/04ba74345bf7985ba6c502642ea796b9?Expires=1696204800&Signature=qxph9RXBKKGHBijWmhEMzaDDXu2UEAbb7SEPCYBQAhhxgrHp3T9qpYwSHrsQUsn~F1k-1Zz5tSCBDrhsCIKS2~dKI3KRm62oLTaqDJW45TxAqcrkR6KlqEg7xJKR4LverQlSWJZvYCVRhHE-z-4H3GssoeivyrGJl9c9sScP4N-0aLbNq3jXIacVTIM5KRoqn~KeKq4YQYpqrW9a~1MXVlV76jUAHitZ~AvsN~FJgU981PhhAAQ-yZZ64KJ3luytUlUSep7iwg~fa3FiEQpZBsQsK2B04WzmdDyKPcgu-jkJCK0ZZPkpATS6gsQHOLUxw9v8bTin0C2h7kuYdC6YRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Rosacea",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e452/f448/f22e2396c73071a242ad1d099b7bfcf5?Expires=1696204800&Signature=aWiKl3Nkaz2qg3ia8Wlm3dNnt1NBVyHSwPg6AjAoQ-tltBQg7EucxXiFQeqCEGqlzHjRdPsiGYUKVNPV~BiyW2mSx1au5UksVfXKkyqabFGfiFGd0yAh0918I1Kvywj8y63j796kznsefq21BglXEZxMl1uoSnimRxuT6fIf0fZ2qRUJcAR5Ko5b5S6tIdzuD~c4NAPBrOWMoLw6AGP1Ek0wMuBZxVO1h-mbQZD3tP2b8aV6sIWujN7aHzd6DxMt9RFsdl-vWZ6yGYC0rXo1yB6RH7Yg0xErLUYS9BF-kOyFeY2AnDs2jVGQrQTU9gc3do2h8lxUPw3Evtoa6e12QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
