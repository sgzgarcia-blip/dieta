const alimentos = {
    "Dieta Kathy A": {
      "dia": {
        "Desayuno": [
          { "nombre": "Tortilla claras", "kcal": 42, "proteina": 11, "carbs": 0.5, "grasa": 0.5, "gramos": 220},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Rodaja de piña o Fresas", "kcal": 32, "proteina": 0.7, "carbs": 7.7, "grasa": 0.3, "gramos": 100},
          { "nombre": "Café o Té o Manzanilla", "kcal": 2, "proteina": 6, "carbs": 4.6, "grasa": 0.2, "gramos": 120}
        ],
        "Media mañana": [
          { "nombre": "Atún natural", "kcal": 333, "proteina": 18, "carbs": 0.5, "grasa": 0.6, "gramos": 56},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50},
          { "nombre": "Rodaja de piña", "kcal": 50, "proteina": 0.5, "carbs": 13, "grasa": 0.1, "gramos": 100}
        ],
        "Comida": [
          { "nombre": "Pollo o Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3, "gramos": 180},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Verduras cocida sin sal", "kcal": 35, "proteina": 3, "carbs": 7, "grasa": 0.5, "gramos": 150},
          { "nombre": "Remolacha cocida", "kcal": 44, "proteina": 1.7, "carbs": 10, "grasa": 0.2, "gramos": 100}
        ],
        "Merienda": [
          { "nombre": "Proteína de suero", "kcal": 42, "proteina": 78, "carbs": 3.4, "grasa": 8.5, "gramos": 30},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50}
        ],
        "Cena": [
          { "nombre": "Pescado blanco", "kcal": 100, "proteina": 20, "carbs": 20, "grasa": 3, "gramos": 200},
          { "nombre": "Patata dulce", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0, "gramos": 100},
          { "nombre": "Brócoli", "kcal": 34, "proteina": 2.8, "carbs": 7, "grasa": 0.4, "gramos": 100}
        ]
      },
      "suplementos": {
        "Al levantarte": {
          "Argiol": "3CAP",
          "Benadon": "Media"
        },
        "Desayuno": {
          "MultiVitaminico": "1CAP",
          "BCAA": "2CAP",
          "EAA": "2CAP",
          "Auxina E 200mg": "Perlita"
        },
        "Comida": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Merienda": {
          "BCAA": "2CAP",
          "EAA": "2TAB",
          "MultiVitaminico": "1CAP"
        },
        "Cena": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Pre-entreno": {
          "Tribulus": "3CAP",
          "Glutamina": "4CAP",
        },
        "Pos-entreno": {
          "Glutamina": "3CAP",
          "BCAA": "4CAP",
          "VitaminaC-REDOXON 1g": "1CAP",
          "Acetilcisteina 600mg": "1CAP"
        },
        "Antes de dormir": {
          "Algiol": "3CAP"
        }
      }  
    },
    "Dieta Kathy B": {
      "dia": {
        "Desayuno": [
          { "nombre": "Tortilla claras", "kcal": 42, "proteina": 11, "carbs": 0.5, "grasa": 0.5, "gramos": 220},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Rodaja de piña o Fresas", "kcal": 32, "proteina": 0.7, "carbs": 7.7, "grasa": 0.3, "gramos": 100},
          { "nombre": "Café o Té o Manzanilla", "kcal": 2, "proteina": 6, "carbs": 4.6, "grasa": 0.2, "gramos": 120}
        ],
        "Media mañana": [
          { "nombre": "Atún natural", "kcal": 333, "proteina": 18, "carbs": 0.5, "grasa": 0.6, "gramos": 56},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50},
          { "nombre": "Rodaja de piña", "kcal": 50, "proteina": 0.5, "carbs": 13, "grasa": 0.1, "gramos": 100}
        ],
        "Comida": [
          { "nombre": "Pollo o Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3, "gramos": 180},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Verduras cocida sin sal", "kcal": 35, "proteina": 3, "carbs": 7, "grasa": 0.5, "gramos": 150},
          { "nombre": "Remolacha cocida", "kcal": 44, "proteina": 1.7, "carbs": 10, "grasa": 0.2, "gramos": 100}
        ],
        "Merienda": [
          { "nombre": "Atún natural", "kcal": 333, "proteina": 18, "carbs": 0.5, "grasa": 0.6, "gramos": 56},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50}
        ],
        "Cena": [
          { "nombre": "Pescado blanco", "kcal": 100, "proteina": 20, "carbs": 20, "grasa": 3, "gramos": 200},
          { "nombre": "Patata dulce", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0, "gramos": 100},
          { "nombre": "Brócoli", "kcal": 34, "proteina": 2.8, "carbs": 7, "grasa": 0.4, "gramos": 100}
        ]
      },
      "suplementos": {

        "Al levantarte": {
          "Argiol": "3CAP",
          "Benadon": "Media"
        },
        "Desayuno": {
          "MultiVitaminico": "1CAP",
          "BCAA": "2CAP",
          "EAA": "2CAP",
          "Auxina E 200mg": "Perlita"
        },
        "Comida": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Merienda": {
          "BCAA": "2CAP",
          "EAA": "2TAB",
          "MultiVitaminico": "1CAP"
        },
        "Cena": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Pre-entreno": {
          "Tribulus": "3CAP",
          "Glutamina": "4CAP",
        },
        "Pos-entreno": {
          "Glutamina": "3CAP",
          "BCAA": "4CAP",
          "VitaminaC-REDOXON 1g": "1CAP",
          "Acetilcisteina 600mg": "1CAP"
        },
        "Antes de dormir": {
          "Algiol": "3CAP"
        }
      }  
    },
    "Dieta Kathy C": {
      "dia": {
        "Desayuno": [
          { "nombre": "Tortilla claras", "kcal": 42, "proteina": 11, "carbs": 0.5, "grasa": 0.5, "gramos": 220},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Rodaja de piña o Fresas", "kcal": 32, "proteina": 0.7, "carbs": 7.7, "grasa": 0.3, "gramos": 100},
          { "nombre": "Café o Té o Manzanilla", "kcal": 2, "proteina": 6, "carbs": 4.6, "grasa": 0.2, "gramos": 120}
        ],
        "Media mañana": [
          { "nombre": "Proteína de suero", "kcal": 42, "proteina": 78, "carbs": 3.4, "grasa": 8.5, "gramos": 30},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50},
          { "nombre": "Rodaja de piña", "kcal": 50, "proteina": 0.5, "carbs": 13, "grasa": 0.1, "gramos": 100}
        ],
        "Comida": [
          { "nombre": "Pollo o Pavo", "kcal": 165, "proteina": 35, "carbs": 0, "grasa": 3, "gramos": 180},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 75},
          { "nombre": "Verduras cocida sin sal", "kcal": 35, "proteina": 3, "carbs": 7, "grasa": 0.5, "gramos": 150},
          { "nombre": "Remolacha cocida", "kcal": 44, "proteina": 1.7, "carbs": 10, "grasa": 0.2, "gramos": 100}
        ],
        "Merienda": [
          { "nombre": "Proteína de suero", "kcal": 42, "proteina": 78, "carbs": 3.4, "grasa": 8.5, "gramos": 30},
          { "nombre": "Arroz cocido", "kcal": 350, "proteina": 7.6, "carbs": 72, "grasa": 2.8, "gramos": 50}
        ],
        "Cena": [
          { "nombre": "Pescado blanco", "kcal": 100, "proteina": 20, "carbs": 20, "grasa": 3, "gramos": 200},
          { "nombre": "Patata dulce", "kcal": 200, "proteina": 5, "carbs": 45, "grasa": 0, "gramos": 100},
          { "nombre": "Brócoli", "kcal": 34, "proteina": 2.8, "carbs": 7, "grasa": 0.4, "gramos": 100}
        ]
      },
      "suplementos": {
        "Al levantarte": {
          "Argiol": "3CAP",
          "Benadon": "Media"
        },
        "Desayuno": {
          "MultiVitaminico": "1CAP",
          "BCAA": "2CAP",
          "EAA": "2CAP",
          "Auxina E 200mg": "Perlita"
        },
        "Comida": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Merienda": {
          "BCAA": "2CAP",
          "EAA": "2TAB",
          "MultiVitaminico": "1CAP"
        },
        "Cena": {
          "BCAA": "2CAP",
          "EAA": "2TAB"
        },
        "Pre-entreno": {
          "Tribulus": "3CAP",
          "Glutamina": "4CAP",
        },
        "Pos-entreno": {
          "Glutamina": "3CAP",
          "BCAA": "4CAP",
          "VitaminaC-REDOXON 1g": "1CAP",
          "Acetilcisteina 600mg": "1CAP"
        },
        "Antes de dormir": {
          "Algiol": "3CAP"
        }
      }  
    }
}