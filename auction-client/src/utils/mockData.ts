import { Category } from "src/types/Category";
import { Lot } from "src/types/Lot";
import { User } from "src/types/User";

export const categories: Category[] = [
  "Мистецтво",
  "Коштовності",
  "Книги",
  "Монети",
  "Одяг",
  "Іграшки",
  "Техніка",
  "Меблі",
];

export const users: User[] = [
  { id: "1", login: "Deer", password: "Oshjfk78", userName: "PWerty" },
  { id: "2", login: "Fox565", password: "YUiO123", userName: "Milfhunter" },
  { id: "3", login: "Girl567", password: "KoLpo", userName: "SexyGirl" },
  { id: "4", login: "Beer890", password: "MiLY78", userName: "KOpRty" },
];

// currencyNames currencyName
// currrencyCodes EUR

export const lots: Lot[] = [
  {
    id: "1",
    title: "Ексклюзивний набір: Дари доброти та надії",
    startPrice: 20,
    createdDate: new Date(2022, 11, 6),
    endDate: new Date(),
    description: "",
    categoryName: "Мистецтво",
    currencyName: "Euro",
    currencyCode: "EUR",
    creatorId: "1",
    bids: [
      {
        id: "1",
        totalPrice: 30,
        currencyName: "Euro",
        accountId: "2",
        createdDate: new Date(2023, 10, 4),
        userName: "Milfhunter",
      },
      {
        id: "2",
        totalPrice: 40,
        currencyName: "Euro",
        accountId: "3",
        createdDate: new Date(2023, 10, 10),
        userName: "SexyGirl",
      },
    ],
  },
  {
    id: "2",
    title: "Літературна скарбниця: Книжки для добрих справ",
    startPrice: 20,
    createdDate: new Date(2023, 4, 5),
    endDate: new Date(),
    description: "",
    categoryName: "Мистецтво",
    currencyName: "Euro",
    currencyCode: "EUR",
    creatorId: "2",
    bids: [
      {
        id: "1",
        totalPrice: 30,
        currencyName: "Euro",
        accountId: "2",
        createdDate: new Date(2023, 10, 4),
        userName: "Milfhunter",
      },
      {
        id: "2",
        totalPrice: 40,
        currencyName: "Euro",
        accountId: "3",
        createdDate: new Date(2023, 10, 10),
        userName: "SexyGirl",
      },
    ],
  },
  {
    id: "3",
    title: "Пам'ятна банкнота 'Пам'ятаємо! Не пробачимо!'",
    startPrice: 20,
    createdDate: new Date(2023, 10, 4),
    endDate: new Date(),
    description: "",
    categoryName: "Мистецтво",
    currencyName: "Euro",
    currencyCode: "EUR",
    creatorId: "3",
    bids: [
      {
        id: "1",
        totalPrice: 30,
        currencyName: "Euro",
        accountId: "2",
        createdDate: new Date(2023, 10, 4),
        userName: "Milfhunter",
      },
      {
        id: "2",
        totalPrice: 40,
        currencyName: "Euro",
        accountId: "3",
        createdDate: new Date(2023, 10, 10),
        userName: "SexyGirl",
      },
      {
        id: "3",
        totalPrice: 30,
        currencyName: "Euro",
        accountId: "2",
        createdDate: new Date(2023, 10, 4),
        userName: "Milfhunter",
      },
      {
        id: "4",
        totalPrice: 40,
        currencyName: "Euro",
        accountId: "3",
        createdDate: new Date(2023, 10, 10),
        userName: "SexyGirl",
      },
      {
        id: "5",
        totalPrice: 30,
        currencyName: "Euro",
        accountId: "2",
        createdDate: new Date(2023, 10, 4),
        userName: "Milfhunter",
      },
      {
        id: "6",
        totalPrice: 40,
        currencyName: "Euro",
        accountId: "3",
        createdDate: new Date(2023, 10, 10),
        userName: "SexyGirl",
      },
    ],
  },
  {
    id: "4",
    title: "Листівки любові для допомоги дітям з Маріуполя",
    startPrice: 10,
    createdDate: new Date(2023, 10, 4),
    endDate: new Date(),
    description: "",
    categoryName: "Мистецтво",
    currencyName: "Euro",
    currencyCode: "EUR",
    creatorId: "1",
    bids: [],
  },
];
