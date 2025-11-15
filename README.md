# 🐌 Snail Sort - Beginner Implementation

## 📝 Description

This project implements the **Snail Sort** algorithm, which takes a 2D square array and returns a 1D array of values arranged in a spiral pattern from the outside to the center, moving clockwise.

Dieses Projekt implementiert den **Snail-Sort-Algorithmus**, der ein quadratisches 2D-Array nimmt und ein 1D-Array von Werten zurückgibt, die in einem Spiralmuster von außen nach innen angeordnet sind, im Uhrzeigersinn bewegend.

## 🎯 How It Works / Wie es funktioniert

The snail sort algorithm traverses the 2D array in the following order:

1. **Top row** → Move right across the top
2. **Right column** → Move down along the right side
3. **Bottom row** → Move left across the bottom (reversed)
4. **Left column** → Move up along the left side
5. Repeat for inner layers until the center is reached

Der Snail-Sort-Algorithmus durchläuft das 2D-Array in folgender Reihenfolge:

1. **Obere Zeile** → Nach rechts über die Oberseite bewegen
2. **Rechte Spalte** → Nach unten entlang der rechten Seite bewegen
3. **Untere Zeile** → Nach links über die Unterseite bewegen (umgekehrt)
4. **Linke Spalte** → Nach oben entlang der linken Seite bewegen
5. Für innere Schichten wiederholen, bis die Mitte erreicht ist

## 📋 Example / Beispiel

```javascript
// Input / Eingabe:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
][
  // Output / Ausgabe:
  (1, 2, 3, 6, 9, 8, 7, 4, 5)
];
```

### Visual Representation / Visuelle Darstellung

```
1 → 2 → 3
        ↓
4 → 5   6
↑       ↓
7 ← 8 ← 9
```

## 🚀 How to Run / Wie man es ausführt

### Prerequisites / Voraussetzungen

- Node.js installed on your computer / Node.js auf Ihrem Computer installiert

### Running the Code / Code ausführen

1. Open your terminal / Öffnen Sie Ihr Terminal
2. Navigate to the project folder / Navigieren Sie zum Projektordner
3. Run the following command / Führen Sie den folgenden Befehl aus:

```bash
node snail.js
```

## 📊 Test Cases / Testfälle

The implementation includes 4 test cases:

Die Implementierung enthält 4 Testfälle:

### Test 1: 3×3 Array

```javascript
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5];
```

### Test 2: 2×2 Array

```javascript
Input: [
  [1, 2],
  [3, 4],
];
Output: [1, 2, 4, 3];
```

### Test 3: 1×1 Array

```javascript
Input: [[1]];
Output: [1];
```

### Test 4: 4×4 Array

```javascript
Input: [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
```

## 🔍 Code Explanation / Code-Erklärung

### Key Variables / Wichtige Variablen

- **`top`**: Tracks the current top boundary / Verfolgt die aktuelle obere Grenze
- **`bottom`**: Tracks the current bottom boundary / Verfolgt die aktuelle untere Grenze
- **`left`**: Tracks the current left boundary / Verfolgt die aktuelle linke Grenze
- **`right`**: Tracks the current right boundary / Verfolgt die aktuelle rechte Grenze
- **`result`**: Stores the final snail-sorted array / Speichert das endgültige schnecken-sortierte Array

### Algorithm Steps / Algorithmus-Schritte

1. **Initialize boundaries** for the array / **Grenzen initialisieren** für das Array
2. **Loop** while there are elements to process / **Schleife** solange es Elemente zu verarbeiten gibt
3. **Traverse right** along the top row / **Nach rechts traversieren** entlang der oberen Zeile
4. **Traverse down** along the right column / **Nach unten traversieren** entlang der rechten Spalte
5. **Traverse left** along the bottom row / **Nach links traversieren** entlang der unteren Zeile
6. **Traverse up** along the left column / **Nach oben traversieren** entlang der linken Spalte
7. **Adjust boundaries** inward and repeat / **Grenzen anpassen** nach innen und wiederholen

## 💡 Beginner-Friendly Features / Anfängerfreundliche Funktionen

- ✅ Every line is commented in English and German / Jede Zeile ist auf Englisch und Deutsch kommentiert
- ✅ Uses simple variable names / Verwendet einfache Variablennamen
- ✅ No advanced JavaScript features / Keine fortgeschrittenen JavaScript-Funktionen
- ✅ Step-by-step logic / Schritt-für-Schritt-Logik
- ✅ Includes test cases with expected output / Enthält Testfälle mit erwarteter Ausgabe

## 📖 Learning Resources / Lernressourcen

This implementation is perfect for beginners learning:

- 2D array manipulation / 2D-Array-Manipulation
- Loop control (for, while) / Schleifensteuerung (for, while)
- Boundary tracking / Grenzenverfolgung
- Algorithm design / Algorithmus-Design

Diese Implementierung ist perfekt für Anfänger, die lernen:

- 2D-Array-Manipulation
- Schleifensteuerung (for, while)
- Grenzenverfolgung
- Algorithmus-Design

## 📄 License / Lizenz

Free to use for learning purposes / Frei zur Verwendung für Lernzwecke

---

**Happy Coding! / Viel Spaß beim Programmieren! 🐌**
