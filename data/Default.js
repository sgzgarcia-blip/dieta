const alimentos = {
    "Lunes": {
      "dia": {
        "Desayuno": [
          {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15, "gramos": 250 },
          {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4, "gramos": 40 },
          {"nombre": "Platano", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
        ],
        "Media mañana": [
          {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0, "gramos": 200 },
          {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
        ],
        "Comida": [
          {"nombre": "Pechuga Pollo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3, "gramos": 250 },
          {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1, "gramos": 100},
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral",  "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 150 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Merluza", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2, "gramos": 200 },
          {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }  
    },
    "Martes": {
      "dia": {
            "Desayuno": [
                { "nombre": "Zumo de naranja. etc", "kcal": 45, "proteina": 0.7, "carbs": 11, "grasa": 0.1
                , "gramos": 20 },
                { "nombre": "Cefé o poleto de té", "kcal": 2, "proteina": 6, "carbs": 4.6, "grasa": 0.2
                , "gramos": 20 },
                { "nombre": "Claras de huevo", "kcal": 42, "proteina": 11, "carbs": 0.5, "grasa": 0.5
                , "gramos": 250 },
                { "nombre": "Tostada integral", "kcal": 110, "proteina": 4, "carbs": 20, "grasa": 1.5
                , "gramos": 200 },
                { "nombre": "Crema de cacahuetes", "kcal": 683, "proteina": 31.9, "carbs": 10.1, "grasa": 55.6
                }
            ],
            "Media mañana": [
                { "nombre": "Proteína de suero", "kcal": 42, "proteina": 78, "carbs": 3.4, "grasa": 8.5
                , "gramos": 30 },
                { "nombre": "Manzana o Piña", "kcal": 52, "proteina": 0.3, "carbs": 22, "grasa": 0
                }
            ],
            "Comida": [
                { "nombre": "Pollo o pavo o ternera", "kcal": 120, "proteina": 24, "carbs": 0, "grasa": 2
                , "gramos": 250 },
                { "nombre": "Patata cocida o arroz", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8
                , "gramos": 200 },
                { "nombre": "Tomate y lechuga", "kcal": 18, "proteina": 0.9, "carbs": 3.5, "grasa": 0.2
                , "gramos": 200 },
                { "nombre": "Verduras cocida sin sal", "kcal": 35, "proteina": 3, "carbs": 7, "grasa": 0.5
                }
            
            ],
            "Merienda": [
                { "nombre": "Proteína de suero", "kcal": 42, "proteina": 78, "carbs": 3.4, "grasa": 8.5
                , "gramos": 30 },
                { "nombre": "Manzana o Piña", "kcal": 52, "proteina": 0.3, "carbs": 22, "grasa": 0
                }
            ],
            "Cena": [
                { "nombre": "Pescado", "kcal": 100, "proteina": 20, "carbs": 20, "grasa": 3
                , "gramos": 250 },
                { "nombre": "Verduras o Ensalada", "kcal": 35, "proteina": 3, "carbs": 7, "grasa": 0.5
                }
            ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }  
    },
    "Miercoles": {
      "dia": {
        "Desayuno": [
          {"nombre": "Smoothie proteico", "kcal": 360, "proteina": 30, "carbs": 50}
        ],
        "Media mañana": [
          {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0, "gramos": 200 },
          {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
        ],
        "Comida": [
          {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7, "gramos": 250 },
          {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1, "gramos": 200 },
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 200 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Pollo", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3, "gramos": 250 },
          {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }  
    },
    "Jueves": {
      "dia": {
        "Desayuno": [
          {"nombre": "Tortilla huevos", "kcal": 215, "proteina": 18, "carbs": 3, "grasa": 15, "gramos": 250 },
          {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4}
        ],
        "Media mañana": [
          {"nombre": "Whey protein", "kcal": 120, "proteina": 24, "carbs": 2, "grasa": 1, "gramos": 30 },
          {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
        ],
        "Comida": [
          {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22, "gramos": 250 },
          {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1, "gramos": 20 },
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 200 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Merluza", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2, "gramos": 250},
          {"nombre": "Batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }  
    },
    "Viernes": {
      "dia": {
        "Desayuno": [
          {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15, "gramos": 250 },
          {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4, "gramos": 40 },
          {"nombre": "Platano", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
        ],
        "Media mañana": [
          {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0, "gramos": 200 },
          {"nombre": "Almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
        ],
        "Comida": [
          {"nombre": "Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 2, "gramos": 250 },
          {"nombre": "Quinoa cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5, "gramos": 200 },
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 200 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22, "gramos": 250 },
          {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }      
    },
    "Sábado": {
      "dia": {
        "Desayuno": [
          {"nombre": "Smoothie proteico", "kcal": 360, "proteina": 30, "carbs": 50, "grasa": 5}
        ],
        "Media mañana": [
          {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0, "gramos": 200 },
          {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
        ],
        "Comida": [
          {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7, "gramos": 250 },
          {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1, "gramos": 200 },
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 200 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Pollo", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3, "gramos": 200 },
          {"nombre": "Batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }
    },
    "Domingo": {
      "dia": {
        "Desayuno": [
          {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15, "gramos": 250 },
          {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4, "gramos": 40 },
          {"nombre": "Frutos rojos",  "kcal": 50, "proteina": 1, "carbs": 12, "grasa": 0}
        ],
        "Media mañana": [
          {"nombre": "Queso fresco", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0, "gramos": 200 },
          {"nombre": "Almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
        ],
        "Comida": [
          {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7, "gramos": 250 },
          {"nombre": "Quinoa cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5, "gramos": 200 },
          {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
        ],
        "Merienda": [
          {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2, "gramos": 200 },
          {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
        ],
        "Cena": [
          {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22, "gramos": 250 },
          {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0}
        ]
      },
      "suplementos": {
        "Creatina_Monohidrato": "5g"
      }
    }
}