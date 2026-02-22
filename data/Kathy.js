const alimentos = {
    "Lunes": {
      "Desayuno": [
        {"nombre": "Huevos enteros", "kcal": 210, "proteina": 18, "carbs": 1, "grasa": 15},
        {"nombre": "avena", "kcal": 230, "proteina": 8, "carbohidratos_g": 38, "grasas_g": 4},
        {"nombre": "platano", "kcal": 105, "proteina": 1, "carbohidratos_g": 27, "grasas_g": 0}
      ],
      "Media mañana": [
        {"nombre": "yogur_0%", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "nueces", "cantidad": "15g", "kcal": 100, "proteina": 2, "carbohidratos_g": 2, "grasas_g": 10}
      ],
      "Comida": [
        {"nombre": "pechuga_pollo", "cantidad": "150g", "kcal": 165, "proteina": 35, "carbohidratos_g": 0, "grasas_g": 3},
        {"nombre": "arroz_crudo", "cantidad": "80g", "kcal": 290, "proteina": 6, "carbohidratos_g": 62, "grasas_g": 1},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0}
      ],
      "Merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "Cena": [
        {"nombre": "merluza", "cantidad": "200g", "kcal": 160, "proteina": 36, "carbohidratos_g": 0, "grasas_g": 2},
        {"nombre": "patata", "cantidad": "250g", "kcal": 200, "proteina": 5, "carbohidratos_g": 45, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "Martes": {
      "desayuno": [
        {"nombre": "huevos_enteros", "cantidad": "3 unidades (180g)", "kcal": 210, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 15},
        {"nombre": "avena", "cantidad": "60g", "kcal": 230, "proteina": 8, "carbohidratos_g": 38, "grasas_g": 4},
        {"nombre": "manzana", "cantidad": "150g", "kcal": 80, "proteina": 0, "carbohidratos_g": 21, "grasas_g": 0}
      ],
      "media_manana": [
        {"nombre": "queso_fresco", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "almendras", "cantidad": "15g", "kcal": 90, "proteina": 3, "carbohidratos_g": 3, "grasas_g": 7}
      ],
      "comida": [
        {"nombre": "pavo", "cantidad": "150g", "kcal": 165, "proteina": 35, "carbohidratos_g": 0, "grasas_g": 2},
        {"nombre": "quinoa_cruda", "cantidad": "80g", "kcal": 295, "proteina": 10, "carbohidratos_g": 55, "grasas_g": 5},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0}
      ],
      "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbohidratos_g": 0, "grasas_g": 22},
        {"nombre": "batata", "cantidad": "250g", "kcal": 220, "proteina": 4, "carbohidratos_g": 50, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "miercoles": {
      "desayuno": [
        {"nombre": "smoothie_proteico", "cantidad": "200ml leche + 50g avena + 30g proteína + 100g frutos rojos", "kcal": 360, "proteina": 30, "carbohidratos_g": 50, "grasas_g": 5}
      ],
      "media_manana": [
        {"nombre": "yogur_0%", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "nueces", "cantidad": "15g", "kcal": 100, "proteina": 2, "carbohidratos_g": 2, "grasas_g": 10}
      ],
      "comida": [
        {"nombre": "ternera_magro", "cantidad": "150g", "kcal": 210, "proteina": 36, "carbohidratos_g": 0, "grasas_g": 7},
        {"nombre": "arroz_crudo", "cantidad": "80g", "kcal": 290, "proteina": 6, "carbohidratos_g": 62, "grasas_g": 1},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ],
      "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "pollo", "cantidad": "200g", "kcal": 220, "proteina": 46, "carbohidratos_g": 0, "grasas_g": 3},
        {"nombre": "patata", "cantidad": "250g", "kcal": 200, "proteina": 5, "carbohidratos_g": 45, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "jueves": {
      "desayuno": [
        {"nombre": "tortilla_huevos", "cantidad": "3 unidades + tomate", "kcal": 215, "proteina": 18, "carbohidratos_g": 3, "grasas_g": 15},
        {"nombre": "avena", "cantidad": "60g", "kcal": 230, "proteina": 8, "carbohidratos_g": 38, "grasas_g": 4}
      ],
      "media_manana": [
        {"nombre": "whey_protein", "cantidad": "30g", "kcal": 120, "proteina": 24, "carbohidratos_g": 2, "grasas_g": 1},
        {"nombre": "nueces", "cantidad": "15g", "kcal": 100, "proteina": 2, "carbohidratos_g": 2, "grasas_g": 10}
      ],
      "comida": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbohidratos_g": 0, "grasas_g": 22},
        {"nombre": "arroz_crudo", "cantidad": "80g", "kcal": 290, "proteina": 6, "carbohidratos_g": 62, "grasas_g": 1},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ],
      "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "merluza", "cantidad": "200g", "kcal": 160, "proteina": 36, "carbohidratos_g": 0, "grasas_g": 2},
        {"nombre": "batata", "cantidad": "250g", "kcal": 220, "proteina": 4, "carbohidratos_g": 50, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "viernes": {
      "desayuno": [
        {"nombre": "huevos_enteros", "cantidad": "3 unidades", "kcal": 210, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 15},
        {"nombre": "avena", "cantidad": "60g", "kcal": 230, "proteina": 8, "carbohidratos_g": 38, "grasas_g": 4},
        {"nombre": "platano", "cantidad": "120g", "kcal": 105, "proteina": 1, "carbohidratos_g": 27, "grasas_g": 0}
      ],
      "media_manana": [
        {"nombre": "yogur_0%", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "almendras", "cantidad": "15g", "kcal": 90, "proteina": 3, "carbohidratos_g": 3, "grasas_g": 7}
      ],
      "comida": [
        {"nombre": "pavo", "cantidad": "150g", "kcal": 165, "proteina": 35, "carbohidratos_g": 0, "grasas_g": 2},
        {"nombre": "quinoa_cruda", "cantidad": "80g", "kcal": 295, "proteina": 10, "carbohidratos_g": 55, "grasas_g": 5},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ],
      "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbohidratos_g": 0, "grasas_g": 22},
        {"nombre": "patata", "cantidad": "250g", "kcal": 200, "proteina": 5, "carbohidratos_g": 45, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "sábado": {
      "desayuno": [
        {"nombre": "smoothie_proteico", "cantidad": "200ml leche + 50g avena + 30g proteína + 100g frutos rojos", "kcal": 360, "proteina": 30, "carbohidratos_g": 50, "grasas_g": 5}
      ],
      "media_manana": [
        {"nombre": "yogur_0%", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "nueces", "cantidad": "15g", "kcal": 100, "proteina": 2, "carbohidratos_g": 2, "grasas_g": 10}
      ],
      "comida": [
        {"nombre": "ternera_magro", "cantidad": "150g", "kcal": 210, "proteina": 36, "carbohidratos_g": 0, "grasas_g": 7},
        {"nombre": "arroz_crudo", "cantidad": "80g", "kcal": 290, "proteina": 6, "carbohidratos_g": 62, "grasas_g": 1},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ],
      "merienda": [
        {"nombre": "pan_integral"

                  "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "pollo", "cantidad": "200g", "kcal": 220, "proteina": 46, "carbohidratos_g": 0, "grasas_g": 3},
        {"nombre": "batata", "cantidad": "250g", "kcal": 220, "proteina": 4, "carbohidratos_g": 50, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    },
    "domingo": {
      "desayuno": [
        {"nombre": "huevos_enteros", "cantidad": "3 unidades", "kcal": 210, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 15},
        {"nombre": "avena", "cantidad": "60g", "kcal": 230, "proteina": 8, "carbohidratos_g": 38, "grasas_g": 4},
        {"nombre": "frutos_rojos", "cantidad": "100g", "kcal": 50, "proteina": 1, "carbohidratos_g": 12, "grasas_g": 0}
      ],
      "media_manana": [
        {"nombre": "queso_fresco", "cantidad": "250g", "kcal": 125, "proteina": 20, "carbohidratos_g": 8, "grasas_g": 0},
        {"nombre": "almendras", "cantidad": "15g", "kcal": 90, "proteina": 3, "carbohidratos_g": 3, "grasas_g": 7}
      ],
      "comida": [
        {"nombre": "ternera_magro", "cantidad": "150g", "kcal": 210, "proteina": 36, "carbohidratos_g": 0, "grasas_g": 7},
        {"nombre": "quinoa_cruda", "cantidad": "80g", "kcal": 295, "proteina": 10, "carbohidratos_g": 55, "grasas_g": 5},
        {"nombre": "verduras_mixtas", "cantidad": "150g", "kcal": 50, "proteina": 2, "carbohidratos_g": 10, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ],
      "merienda": [
        {"nombre": "pan_integral", "cantidad": "60g", "kcal": 150, "proteina": 6, "carbohidratos_g": 30, "grasas_g": 2},
        {"nombre": "pavo", "cantidad": "80g", "kcal": 90, "proteina": 18, "carbohidratos_g": 1, "grasas_g": 1}
      ],
      "cena": [
        {"nombre": "salmon", "cantidad": "200g", "kcal": 400, "proteina": 40, "carbohidratos_g": 0, "grasas_g": 22},
        {"nombre": "patata", "cantidad": "250g", "kcal": 200, "proteina": 5, "carbohidratos_g": 45, "grasas_g": 0},
        {"nombre": "aceite_oliva", "cantidad": "10g", "kcal": 90, "proteina": 0, "carbohidratos_g": 0, "grasas_g": 10}
      ]
    }
}