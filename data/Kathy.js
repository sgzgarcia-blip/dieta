const alimentos = {
    "Lunes": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "Platano", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "nueces", "15g", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "pechuga_pollo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3},
        {"nombre": "arroz_crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
      ],
      "Merienda": [
        {"nombre": "pan_integral",  "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo",  "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "merluza", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2},
        {"nombre": "patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "Martes": {
      "Desayuno": [
        {"nombre": "huevos_enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "manzana", "kcal": 80, "proteina": 0, "carbs": 21, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "queso_fresco", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 2},
        {"nombre": "quinoa_cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "miercoles": {
      "Desayuno": [
        {"nombre": "smoothie_proteico", "cantidad": "200ml leche + 50g Avena + 30g proteína + 100g frutos rojos", "kcal": 360, "proteina": 30, "carbs": 50, "grasa": 5}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "ternera_magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "arroz_crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "pollo", "cantidad": "200g", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3},
        {"nombre": "patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "jueves": {
      "Desayuno": [
        {"nombre": "tortilla_huevos", "cantidad": "3 unidades + tomate", "kcal": 215, "proteina": 18, "carbs": 3, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4}
      ],
      "Media mañana": [
        {"nombre": "whey_protein", "cantidad": "30g", "kcal": 120, "proteina": 24, "carbs": 2, "grasa": 1},
        {"nombre": "nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "arroz_crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "merluza", "cantidad": "200g", "kcal": 160, "proteina": 36, "carbs": 0, "grasa": 2},
        {"nombre": "batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "viernes": {
      "Desayuno": [
        {"nombre": "huevos_enteros", "cantidad": "3 unidades", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "Platano", "cantidad": "120g", "kcal": 105, "proteina": 1, "carbs": 27, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 2},
        {"nombre": "quinoa_cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "sábado": {
      "Desayuno": [
        {"nombre": "smoothie_proteico", "cantidad": "200ml leche + 50g Avena + 30g proteína + 100g frutos rojos", "kcal": 360, "proteina": 30, "carbs": 50, "grasa": 5}
      ],
      "Media mañana": [
        {"nombre": "Yogur 0%", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "nueces", "kcal": 100, "proteina": 2, "carbs": 2, "grasa": 10}
      ],
      "Comida": [
        {"nombre": "ternera_magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "arroz_crudo", "kcal": 290, "proteina": 6, "carbs": 62, "grasa": 1},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "pan_integral"

                  "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "pollo", "cantidad": "200g", "kcal": 220, "proteina": 46, "carbs": 0, "grasa": 3},
        {"nombre": "batata", "kcal": 220, "proteina": 4, "carbs": 50, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    },
    "domingo": {
      "Desayuno": [
        {"nombre": "huevos_enteros", "cantidad": "3 unidades", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "Avena", "kcal": 230, "proteina": 8, "carbs": 38, "grasa": 4},
        {"nombre": "frutos_rojos", "cantidad": "100g", "kcal": 50, "proteina": 1, "carbs": 12, "grasa": 0}
      ],
      "Media mañana": [
        {"nombre": "queso_fresco", "kcal": 125, "proteina": 20, "carbs": 8, "grasa": 0},
        {"nombre": "almendras", "kcal": 90, "proteina": 3, "carbs": 3, "grasa": 7}
      ],
      "Comida": [
        {"nombre": "ternera_magro", "kcal": 210, "proteina": 36, "carbs": 0, "grasa": 7},
        {"nombre": "quinoa_cruda", "kcal": 295, "proteina": 10, "carbs": 55, "grasa": 5},
        {"nombre": "verduras_mixtas", "kcal": 50, "proteina": 2, "carbs": 10, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "kcal": 150, "proteina": 6, "carbs": 30, "grasa": 2},
        {"nombre": "pavo", "kcal": 90, "proteina": 18, "carbs": 1, "grasa": 1}
      ],
      "Cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbs": 0, "grasa": 22},
        {"nombre": "patata", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0},
        {"nombre": "aceite_oliva", "kcal": 90, "proteina": 0, "carbs": 0, "grasa": 10}
      ]
    }
}