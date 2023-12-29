import homeIcon from "../../../images/home/home-icon.svg";
import electronic from "../../../images/home/technology-icon.svg";
import building from "../../../images/home/building-icon.svg";
import car from "../../../images/home/car-icon.svg";
import things from "../../../images/home/clothes-icon.svg";
import hobby from "../../../images/home/ball-icon.svg";
import kids from "../../../images/home/kids-icon.svg";
import pets from "../../../images/home/pets-icon.svg";
import jobs from "../../../images/home/jobs-icon.svg";
import other from "../../../images/home/english-key-icon.svg";

export default [
  {
    id: 1,
    title: "İtlər",
    href: "/apartman?category=Heyvan&subcategory=İtlər",
  },
  {
    id: 2,
    title: "Pişiklər",
    href: "/apartman?category=Heyvan&subcategory=Pişiklər",
  },
  {
    id: 3,
    title: "Balıqlar",
    href: "/apartman?category=Heyvan&subcategory=Balıqlar",
  },
  {
    id: 4,
    title: "Qazlar və ördəklər",
    href: "/apartman?category=Heyvan&subcategory=Qazlar və ördəklər",
  },
  {
    id: 5,
    title: "Heyvanların digər növləri",
    href: "/apartman?category=Heyvan&subcategory=Heyvanların digər növləri",
  },
];

export const categoryLeftData = [
  {
    id: 1,
    title: "Ev və bağ",
    icon: homeIcon,
    alt: "home",
  },
  {
    id: 2,
    title: "Elektronika və texnika",
    icon: electronic,
    alt: "technology",
  },
  {
    id: 3,
    title: "Daşınmaz əmlak",
    icon: building,
    alt: "building",
  },
  {
    id: 4,
    title: "Nəqliyyat",
    icon: car,
    alt: "car",
  },
  {
    id: 5,
    title: "Şəxsi əşyalar",
    icon: things,
    alt: "things",
  },
  {
    id: 6,
    title: "Hobbi,asudə",
    icon: hobby,
    alt: "hobby",
  },
  {
    id: 7,
    title: "Uşaq aləmi",
    icon: kids,
    alt: "kids",
  },
  {
    id: 8,
    title: "Heyvan",
    icon: pets,
    alt: "pets",
  },
  {
    id: 9,
    title: "Vakansiyalar",
    icon: jobs,
    alt: "jobs",
  },
  {
    id: 10,
    title: "Digər xidmətlər",
    icon: other,
    alt: "other",
  },
];

export const subCategories = [
  {
    id: 1,
    alt: "home",
    category: "Ev və bağ üçün",
    titles: [
      "Məişət əşyaları",
      "Yataqxana və banyo",
      "Mebel və tərz",
      "Mətbəx və qida hazırlığı",
      "Təmir və inkişaf",
      "Bağ və əkin",
    ],
  },
  {
    id: 2,
    alt: "technology",
    category: "Elektronika və texnika",
    titles: [
      "Telefonlar və aksesuarlar",
      "Kompüterlər və planşetlər",
      "TV və audio",
      "Kamera və foto",
      "Oyunlar və oyun avadanlıqları",
      "Digər elektronika",
    ],
  },
  {
    id: 3,
    alt: "building",
    category: "Daşınmaz əmlak",
    titles: [
      "Mənzillər",
      "Villalar",
      "Bağ evləri",
      "Qarajlar",
      "Obyekt və ofislər",
      "Torpaq sahələri",
    ],
  },
  {
    id: 4,
    alt: "car",
    category: "Nəqliyyat",
    titles: [
      "Avtomobillər",
      "Motosikletlər",
      "Mopedlər və skuterlər",
      "Yük maşınları",
      "Avtobuslar və ticarət nəqliyyatı",
      "Su nəqliyyatı",
    ],
  },
  {
    id: 5,
    alt: "things",
    category: "Şəxsi əşyalar",
    titles: [
      "Geyim və ayaqqabılar",
      "Sağlamlıq və gözəllik",
      "Parfüm və kosmetika",
      "Aksesuarlar",
      "Saatlar",
      "Şəxsi əşyaların digər növləri",
    ],
  },
  {
    id: 6,
    alt: "hobby",
    category: "Hobbi,asudə",
    titles: [
      "Kitablar və jurnal",
      "Musiqi və filmlər",
      "İdman və turizm",
      "Məişət avadanlıqları",
      "Bəstəkarlıq və rəqs",
      "Digər hobbi və asudə məhsulları",
    ],
  },
  {
    id: 7,
    alt: "kids",
    category: "Uşaq aləmi",
    titles: [
      "Uşaq geyimləri və ayaqqabıları",
      "Uşaq avadanlıqları",
      "Uşaq kitabları və oyuncaqları",
      "Uşaq sağlamlığı və həkimlik",
      "Uşaq məhsulları və qidalanma",
      "Uşaq aləminin digər məhsulları",
    ],
  },
  {
    id: 8,
    alt: "pets",
    category: "Heyvan",
    titles: [
      "İtlər",
      "Pişiklər",
      "Balıqlar",
      "Qazlar və ördəklər",
      "Heyvanların digər növləri",
    ],
  },
  {
    id: 9,
    alt: "jobs",
    category: "Vakansiyalar",
    titles: [
      "İş təklifləri",
      "İş axtaranlar",
      "Freelance işlər",
      "Stajyerlik və təlim",
      "İş nəzəriyyələri və təcrübə",
    ],
  },
  {
    id: 10,
    alt: "other",
    category: "Digər xidmətlər",
    titles: [
      "Təmir və xidmətlər",
      "Tərcümə və müşavirlik",
      "Dərs və təlim",
      "Tədbirlər və məclislər",
      "Digər xidmətlər",
    ],
  }
];
