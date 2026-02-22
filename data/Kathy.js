const alimentos = {
    "Lunes": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "Platano", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "Pechuga Pollo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3},
        {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
      ],
      "Merienda": [
        {"nombre": "Pan integral",  "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Merluza", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2},
        {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Martes": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "manzana", "kcal": 80, "proteina": 0, "carbs": 21, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Queso fresco", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 2},
        {"nombre": "Quinoa cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "Batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Miercoles": {
      "Desayuno": [
        {"nombre": "Smoothie proteico", "kcal": 360, "proteina": 30, "carbs": 50, "grasa": 5}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Pollo", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3},
        {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Jueves": {
      "Desayuno": [
        {"nombre": "Tortilla huevos", "kcal": 215, "proteina": 18, "carbs": 3, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4}
      ],
      "Media mañana": [
        {"nombre": "Whey protein", "kcal": 120, "proteina": 24, "carbs": 2, "grasa": 1},
        {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Merluza", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2},
        {"nombre": "Batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Viernes": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "Platano", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 2},
        {"nombre": "Quinoa cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Sábado": {
      "Desayuno": [
        {"nombre": "Smoothie proteico", "kcal": 360, "proteina": 30, "carbs": 50, "grasa": 5}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "Arroz crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Pollo", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3},
        {"nombre": "Batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Domingo": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "Frutos rojos",  "kcal": 50, "proteina": 1, "carbs": 12, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Queso fresco", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "Almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "Ternera magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "Quinoa cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "Verduras mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "Pan integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "Pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "Salmon", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "Patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "Aceite oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    }
}