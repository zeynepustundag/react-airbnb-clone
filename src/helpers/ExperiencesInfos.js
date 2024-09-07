import kapadokyaballoons from "../assets/kapadokyaballoons.jpg"
import canoe1 from "../assets/canoe1.jpg"
import canoe2 from "../assets/canoe2.jpg"
import ceramic1 from "../assets/ceramic1.jpg"
import ceramic2 from "../assets/ceramic2.jpg"
import bosphorusTour1 from "../assets/bosphorusTour1.jpg"
import bosphorusTour2 from "../assets/bosphorusTour2.jpg"

const ExperiencesInfos = [
    {
        id: 1,
        img: [
            ceramic1,
            ceramic2
        ],
        destination: "Antalya, Türkiye",
        price: 2000,
        content: "Seramik Atölyesi",
    },
    {
        id: 2,
        img: [
            bosphorusTour1,
            bosphorusTour2
        ],
        destination: "İstanbul, Türkiye",
        price: 3000,
        content: "Benagil Mağarası Kano Turu",
    },
    {
        id: 3,
        img: [
            canoe1,
            canoe2
        ],
        destination: "Portekiz",
        price: 3500,
        content: "Benagil Mağarası Kano Turu",
    },
    {
        id: 4,
        img: [kapadokyaballoons],
        destination: "Kapadokya, Nevşehir, Türkiye",
        price: 7000,
        content: "Kapadokya'da Sıcak Hava Balonu Uçuşu",
    },
]
export default ExperiencesInfos;