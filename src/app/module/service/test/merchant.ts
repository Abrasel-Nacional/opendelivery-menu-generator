import { IMerchant } from "../../models/merchant";

export const merchant: IMerchant = {
  "lastUpdate": "2021-05-27T20:45:10.332Z",
  "TTL": 500,
  "id": "22815773000169-dbc7e35a-c936-4665-9e13-eb55eb8b6824",
  "status": "AVAILABLE",
  "basicInfo": {
    "name": "Pizza Plaza",
    "document": "22815773000169",
    "corporateName": "Food Company",
    "description": "Food company specializing in pizzas.",
    "averageTicket": 90,
    "averagePreparationTime": 20,
    "minOrderValue": {
      "value": 20,
      "currency": "BRL"
    },
    "merchantType": "RESTAURANT",
    "merchantCategories": [
      "PIZZA",
      "FAMILY_MEALS",
      "PREMIUM"
    ],
    "address": {
      "country": "BR",
      "state": "SP",
      "city": "São Paulo",
      "district": "Moema",
      "street": "Plaza Avenue",
      "number": "100",
      "postalCode": "20111-000",
      "complement": "2001",
      "reference": "Yellow house",
      "latitude": -23.54804,
      "longitude": -46.6363
    },
    "contactEmails": [
      "food@company.com"
    ],
    "contactPhones": {
      "commercialNumber": "11999999999",
      "whatsappNumber": "11998888888"
    },
    "logoImage": {
      "URL": "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/a943c514-c468-42e4-beab-4e2fc7417661_DENGO_ALIMA.jpg",
      "CRC-32": "432098ASDSR"
    },
    "bannerImage": {
      "URL": "https://static-images.ifood.com.br/image/upload//capa/e8cce88d-f940-4363-9d27-4c58c97858e8/202204281118_4H8t_i@2x.jpg",
      "CRC-32": "09345UIHF98"
    },
    "createdAt": "2021-05-10T20:45:10.332Z"
  },
  "services": [
    {
      "id": "f078e8e2-3044-4eec-b4a8-8359810de123",
      "status": "AVAILABLE",
      "serviceType": "DELIVERY",
      "menuId": "f627ccdc-6789-456f-a782-148538d5035b",
      "serviceArea": {
        "id": "f078e8e2-3044-4eec-b4a8-8359810de124",
        "polygon": [
          {
            "geoCoordinates": [
              {
                "latitude": -20.2333,
                "longitude": -20.8383
              },
              {
                "latitude": -20.85008,
                "longitude": -21.00007
              },
              {
                "latitude": -21.15002,
                "longitude": -21.95483
              }
            ],
            "price": {
              "value": 5,
              "currency": "BRL"
            },
            "estimateDeliveryTime": 25
          }
        ],
        "geoRadius": {
          "geoMidpointLatitude": -20.2333,
          "geoMidpointLongitude": -20.8383,
          "radius": [
            {
              "size": 10,
              "price": {
                "value": 5.5,
                "currency": "BRL"
              },
              "estimateDeliveryTime": 10
            }
          ]
        }
      },
      "serviceHours": {
        "id": "fb093d8c-2ca5-40fb-afcf-472fbdae81cc",
        "weekHours": [
          {
            "dayOfWeek": [
              "MONDAY",
              "TUESDAY",
              "WEDNESDAY",
              "THURSDAY",
              "FRIDAY"
            ],
            "timePeriods": {
              "startTime": "10:00:00.000Z",
              "endTime": "18:00:00.000Z"
            }
          },
          {
            "dayOfWeek": [
              "SATURDAY",
              "SUNDAY"
            ],
            "timePeriods": {
              "startTime": "14:00:00.000Z",
              "endTime": "18:00:00.000Z"
            }
          }
        ],
        "holidayHours": [
          {
            "date": "2021-05-27",
            "timePeriods": {
              "startTime": "12:00:00.000Z",
              "endTime": "17:00:00.000Z"
            }
          }
        ]
      }
    }
  ],
  "items": [
    {
      "id": "732bd31e-77fc-47ee-88ee-a0437f97b198",
      "name": "Medium - 2 flavors",
      "description": "Medium two-flavored pizza.",
      "externalCode": "23",
      "image": {
        "URL": "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
        "CRC-32": "09345UIHF98"
      },
      "serving": 8,
      "unit": "unit"
    },
    {
      "id": "b728fd88-4af0-43f7-956f-95c251f01ddd",
      "name": "Small - 1 flavor",
      "description": "Small one-flavored pizza.",
      "externalCode": "23",
      "image": {
        "URL": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg",
        "CRC-32": "09345UIHF98"
      },
      "serving": 4,
      "unit": "unit"
    },
    {
      "id": "502ecf11-0509-48ed-b63c-6211c48fd9b9",
      "name": "1/2 Pepperoni",
      "description": "Pepperoni flavored pizza with LOTS of pepperoni.",
      "externalCode": "23",
      "image": {
        "URL": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg",
        "CRC-32": "09345UIHF98"
      },
      "nutritionalInfo": {
        "description": "Contains preservatives",
        "calories": "2000 Cal",
        "allergen": [
          "GLUTEN"
        ]
      },
      "unit": "unit"
    },
    {
      "id": "7e507cab-7235-4f75-a0c2-e955fb2f2048",
      "name": "1/2 Mozzarella",
      "description": "Delicious mozzarella pizza.",
      "externalCode": "24",
      "image": {
        "URL": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg",
        "CRC-32": "09345UIHF98"
      },
      "nutritionalInfo": {
        "description": "Contains preservatives",
        "calories": "2500 Cal",
        "allergen": [
          "GLUTEN",
          "LACTOSE"
        ]
      },
      "unit": "unit"
    },
    {
      "id": "2c0f3447-5309-49cc-a167-4eac5c664470",
      "name": "Banana",
      "description": "Banana Pizza with cream.",
      "externalCode": "25",
      "image": {
        "URL": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg",
        "CRC-32": "09345UIHF98"
      },
      "nutritionalInfo": {
        "description": "Contains preservatives",
        "calories": "2500 Cal",
        "allergen": [
          "GLUTEN"
        ]
      },
      "unit": "unit"
    },
    {
      "id": "732bd31e-77fc-47ee-88ee-a0437f97b188",
      "name": "Coca-cola",
      "description": "Coca gelada.",
      "externalCode": "23",
      "image": {
        "URL": "https://adegabomretiro.com.br/wp-content/uploads/2019/10/Coke-700x850.jpg",
        "CRC-32": "09345UIHF98"
      },
      "serving": 8,
      "unit": "unit"
    },
    {
      "id": "732bd31e-77fc-47ee-88ee-a0437f97b177",
      "name": "Fanta",
      "description": "Fanta gelada.",
      "externalCode": "23",
      "image": {
        "URL": "https://hiperideal.vteximg.com.br/arquivos/ids/197318-1000-1000/557307.jpg?v=637828722328930000",
        "CRC-32": "09345UIHF98"
      },
      "serving": 8,
      "unit": "unit"
    }
  ],
  "menus": [
    {
      "id": "f627ccdc-6789-456f-a782-148538d5035b",
      "name": "Menu Principal",
      "description": "Pizza menu",
      "externalCode": "123",
      "disclaimer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "categoryId": [
        "92fad022-2c28-4239-a026-989f5b555cb7",
        "6bb71850-1d40-49f9-8046-b13e068c0cca",
        "6bb71850-1d40-49f9-8046-b13e068c0cab"
      ]
    }
  ],
  "categories": [
    {
      "id": "92fad022-2c28-4239-a026-989f5b555cb7",
      "index": 0,
      "name": "Salted Pizza",
      "description": "Salted pizza flavors.",
      "image": {
        "URL": "https://food-company.com/category1.png",
        "CRC-32": "09345UIHF98"
      },
      "externalCode": "13",
      "status": "AVAILABLE",
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "itemOfferId": [
        "f080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
        "377b99ba-5413-43d1-b875-7cdcaa72860e",
        "1080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
        "1080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9"

      ]
    },
    {
      "id": "6bb71850-1d40-49f9-8046-b13e068c0cca",
      "index": 1,
      "name": "Sweeted Pizza",
      "description": "Sweeted pizza flavors.",
      "image": {
        "URL": "https://food-company.com/category2.png",
        "CRC-32": "09345UIHF98"
      },
      "externalCode": "13",
      "status": "AVAILABLE",
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "itemOfferId": [
        "377b99ba-5413-43d1-b875-7cdcaa72860e"
      ]
    },
    {
      "id": "6bb71850-1d40-49f9-8046-b13e068c0cab",
      "index": 1,
      "name": "Refrigerante",
      "description": "Refrigerante de todos os sabores.",
      "image": {
        "URL": "https://food-company.com/category2.png",
        "CRC-32": "09345UIHF98"
      },
      "externalCode": "13",
      "status": "AVAILABLE",
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "itemOfferId": [
        "377b99ba-5413-43d1-b875-7cdcaa728611",
        "377b99ba-5413-43d1-b875-7cdcaa728600"
      ]
    }
  ],
  "itemOffers": [
    {
      "id": "f080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
      "itemId": "732bd31e-77fc-47ee-88ee-a0437f97b198",
      "index": 0,
      "price": {
        "value": 43,
        "originalValue": 43,
        "currency": "BRL"
      },
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "optionGroupsId": [
        "fe67e551-f42f-499a-8afb-0ed893c71fa3",
        "c524c066-96fa-458d-b78c-3712661529b3"
      ]
    },
    {
      "id": "1080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
      "itemId": "502ecf11-0509-48ed-b63c-6211c48fd9b9",
      "index": 0,
      "price": {
        "value": 45,
        "originalValue": 45,
        "currency": "BRL"
      },
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "optionGroupsId": [
        "fe67e551-f42f-499a-8afb-0ed893c71fa3"
      ]
    },
    {
      "id": "377b99ba-5413-43d1-b875-7cdcaa72860e",
      "itemId": "7e507cab-7235-4f75-a0c2-e955fb2f2048",
      "index": 1,
      "price": {
        "value": 30,
        "originalValue": 30,
        "currency": "BRL"
      },
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "optionGroupsId": [
        "c524c066-96fa-458d-b78c-3712661529b3"
      ]
    },
    {
      "id": "377b99ba-5413-43d1-b875-7cdcaa728600",
      "itemId": "732bd31e-77fc-47ee-88ee-a0437f97b188",
      "index": 1,
      "price": {
        "value": 5,
        "originalValue": 5,
        "currency": "BRL"
      },
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "optionGroupsId": [
        "c524c066-96fa-458d-b78c-3712661529b3"
      ]
    },
    {
      "id": "377b99ba-5413-43d1-b875-7cdcaa728611",
      "itemId": "732bd31e-77fc-47ee-88ee-a0437f97b177",
      "index": 1,
      "price": {
        "value": 4,
        "originalValue": 4,
        "currency": "BRL"
      },
      "availabilityId": [
        "11d063c4-73a7-4f87-a0eb-71636cc02029"
      ],
      "optionGroupsId": [
        "c524c066-96fa-458d-b78c-3712661529b3"
      ]
    }
  ],
  "optionGroups": [
    {
      "id": "fe67e551-f42f-499a-8afb-0ed893c71fa3",
      "index": 0,
      "name": "Choose your salted pizza flavor",
      "description": "Choose your salted pizza flavor.",
      "externalCode": "12",
      "status": "AVAILABLE",
      "minPermitted": 2,
      "maxPermitted": 2,
      "options": [
        {
          "id": "e5232f14-430c-4a94-8ff6-289d5a16a87a",
          "itemId": "502ecf11-0509-48ed-b63c-6211c48fd9b9",
          "index": 0,
          "price": {
            "value": 50,
            "originalValue": 50,
            "currency": "BRL"
          },
          "maxPermitted": 1
        },
        {
          "id": "e5232f14-430c-4a94-8ff6-289d5a16a87b",
          "itemId": "7e507cab-7235-4f75-a0c2-e955fb2f2048",
          "index": 1,
          "price": {
            "value": 43,
            "originalValue": 43,
            "currency": "BRL"
          },
          "maxPermitted": 1
        }
      ]
    },
    {
      "id": "c524c066-96fa-458d-b78c-3712661529b3",
      "index": 0,
      "name": "Choose your sweeted pizza flavor",
      "description": "Choose your sweeted pizza flavor.",
      "externalCode": "12",
      "status": "AVAILABLE",
      "minPermitted": 1,
      "maxPermitted": 1,
      "options": [
        {
          "id": "2419d582-357f-4149-9089-12321537f147",
          "itemId": "2c0f3447-5309-49cc-a167-4eac5c664470",
          "index": 0,
          "price": {
            "value": 30,
            "originalValue": 30,
            "currency": "BRL"
          },
          "maxPermitted": 1
        }
      ]
    }
  ],
  "availabilities": [
    {
      "id": "11d063c4-73a7-4f87-a0eb-71636cc02029\"",
      "startDate": "05/01/2021",
      "endDate": "05/30/2021",
      "hours": [
        {
          "dayOfWeek": [
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY"
          ],
          "timePeriods": {
            "startTime": "10:00:00.000Z",
            "endTime": "18:00:00.000Z"
          }
        },
        {
          "dayOfWeek": [
            "SATURDAY",
            "SUNDAY"
          ],
          "timePeriods": {
            "startTime": "14:00:00.000Z",
            "endTime": "18:00:00.000Z"
          }
        }
      ]
    }
  ]
}