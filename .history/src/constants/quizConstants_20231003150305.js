const quiz1 = [
  {
    src: "/Image/78.png",
    type: "Dry",
  },
  {
    src: "/Image/79.png",
    type: "Oily",
  },

  {
    src: "/Image/80.png",
    type: "Normal",
  },

  {
    src: "/Image/81.png",
    type: "Mature",
  },
];
const quiz2 = [
  {
    src: "/Image/82.jpg",
    type: "Inflamed",
  },
  {
    src: "/Image/83.png",
    type: "Non Inflamed",
  },
  {
    src: "/Image/84.png",
    type: "Combination",
  },
];
const quiz3 = [
  {
    src: "https://s3-alpha-sig.figma.com/img/3eca/9ce1/cb8f7b3d8c815d864b8713871ff80cc9?Expires=1696204800&Signature=bvs2k0POnO4itZtsOG3ciLm4he8lnHavlch-YJWtOcGiXeDu6gAW3BRRUA3hFfSac87~q83WBudtnqfhtdyPZi7DcPK5AafWwvS3Pj8qUdNVABOb6rD7cFlQklwVNdC8zennyN8Vya-xU-Ij8~dQ3twf6b83Ig95U23LrbjDHr6w0jJy8pwiGtbDscX~e8CKf8AE01uf4SWcLWYq9T-287NQII9TqeViLG9ny9E2daoMY7gsqVV4t-Jl---27vQehDBXY3dSrUV6lND-PXrfZMjbT4AmAfLut96Hk4X7avOcyKkBcj9uO1YYaDYQ36w0xzvyZSjIBXQh5Mj3ad8doQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Mild",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/506b/7536/0ea9db9cd17e2725c694c079209f35db?Expires=1696204800&Signature=XvD2v6MvkMayXqr-Fu5bGkS674y7R1S1NXFz0Nu5bsh8KQGxLUhd3H-wBYyuIRFdXXCXedweqpGFtBkctqFPmYK3UtCYCAGaCO6eldvElUCCQDpumPIsSTGq2QIs8exbVsQgqyVZ0yy1jS0t-o87rYRf079C~De5qMK-PihbqWg4X~N-RZwX3MDE2AR70bBKp4xrYhVNtvtP~NCj6Jw-FD7qHkNuZqSO0p20X71S--d~13K5i59-KVJISBLgrqJQfTZlIEp3P~oP9YUfy9fnXzzbUnmq40Oc6R8q-XI9dOZIt9Oj7j1DNIci7~eFZjDwIxT1CNX~QRPdVrFd7-~~VQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Moderate",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f384/570b/8ca2fb2ae7783cbf0d41e564ee667f52?Expires=1696204800&Signature=FaSKmikcxeLP5fX9l07WBgeL43XZDutzuo7HI4O6fTJeX24~4xEJZTVFXF10CQQgYLi7eJNbWkiFZKYmi2MTVSrFmu81GhzoKDeRgaRqlVa5r9f3sabhg1PKYW2Zp-JwdTTcg6~cz2C478gBwc6B~fqtf3Nt8LdztJqdXy8jbuHeZ664z4FWNFZkRy3IuMsvHBg3MYc~pNgjsB4ak2rHz81zAKqFQylRwPOQhkJrdQHPTT6Q~X6YJVm7rmmiUsNaNP-kce740za45qv1aUnhdmIT5V6a83aIO6OPzGgfFVR~WK8K~5EYCAjpyqggbFnNEcNtsvjguJFgjUgvS4c9ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Severe",
  },
];
const quiz4 = [
  {
    src: "https://s3-alpha-sig.figma.com/img/15fb/a4d0/3036f1241f3ffc2f46415bd30d273f2e?Expires=1696204800&Signature=q8afFpfIOghq31oaxgiqCdYJ3qzjwKT3hl91TPg~J53YY-CbeYk-rFHyMFJm7mimIl81ihuS2nNCJD7ICEbkGtuieXHUcS-5SFNHXdgF3Pq5Qh34nnsgNxNUUMXmeBos6dWOVZYGWldmGSIQlO4lgJVUaurjTNcA8ckuGb7GcFcJzH5j0bsJmATgIe52vtry~w7zPwurOH61GyLlVthjI723ftY0lI8lK-4UyVcddDzw~wx0di1RUMEtjU2iz4YGAHTb7hekrFu~2QRguP~k47U6BCF1ewYifq8itX546SILATGi9dpT~TVp6iSZF2WZ4TbFrUnOgWzpjOS83Ku6Vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Yes",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bf88/b38b/a5551a7ef3324f9d38214f1d547152b7?Expires=1696204800&Signature=FJX~f-5eXZbwoQXaBNONbbx8k~InJHzKHRo3rFsyu9ow~FOCgJO9sQiWnXe2WvKm6CD6x5wnrG0VrDrjg0SPMTlZZLYAYK-8iPEK-PyleVTEeQnjO1mUs-70Ekt9xtkjAbDgW2jGj27bc5Af1kPyofF8ZNZGbdiR8avYAMvzpzbvHOnsE35asfgkMfMKGJ1Yqc2EtY0R09I5MmKFaNYMxmEjtN8syS~MiR6NZ2292nVTS-vbImY408pBRa0Ve8XTnSdMyCZvv0mnMaG4TQ2hxmOfPrIRQDx1d-QS35bAudgl0iw8UOWr5Kt7bCQiqvR5gkbQhh7JJ5Q3ukTfaJW0XQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "No",
  },
];
export { quiz1, quiz2, quiz3, quiz4 };
