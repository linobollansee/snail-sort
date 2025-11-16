// Snail Sort Function
// Snail-Sort-Funktion

// This function takes a 2D array and returns elements in snail order
// Diese Funktion nimmt ein 2D-Array und gibt Elemente in Schnecken-Reihenfolge zurück
function snail(array) {
  // Check if the array is empty or has an empty first row
  // Überprüfen, ob das Array leer ist oder eine leere erste Zeile hat
  if (array.length === 0 || array[0].length === 0) {
    // If empty, return an empty array
    // Wenn leer, gib ein leeres Array zurück
    return [];
  }

  // Create an empty array to store our result
  // Erstelle ein leeres Array, um unser Ergebnis zu speichern
  let result = [];

  // Set the initial top boundary (starting row)
  // Setze die anfängliche obere Grenze (Startzeile)
  let top = 0;

  // Set the initial bottom boundary (ending row)
  // Setze die anfängliche untere Grenze (Endzeile)
  let bottom = array.length - 1;

  // Set the initial left boundary (starting column)
  // Setze die anfängliche linke Grenze (Startspalte)
  let left = 0;

  // Set the initial right boundary (ending column)
  // Setze die anfängliche rechte Grenze (Endspalte)
  let right = array[0].length - 1;

  // Keep looping while we still have elements to process
  // Schleife solange, bis wir noch Elemente zu verarbeiten haben
  while (top <= bottom && left <= right) {
    // Step 1: Move RIGHT along the top row
    // Schritt 1: Nach RECHTS entlang der oberen Zeile bewegen
    // Loop from left boundary to right boundary
    // Schleife von linker Grenze bis rechter Grenze
    for (let i = left; i <= right; i++) {
      // Add the current element to result
      // Füge das aktuelle Element zum Ergebnis hinzu
      result.push(array[top][i]);
    }
    // Move the top boundary down (we're done with this row)
    // Verschiebe die obere Grenze nach unten (wir sind mit dieser Zeile fertig)
    top = top + 1;

    // Step 2: Move DOWN along the right column
    // Schritt 2: Nach UNTEN entlang der rechten Spalte bewegen
    // Loop from the new top boundary to bottom boundary
    // Schleife von der neuen oberen Grenze bis zur unteren Grenze
    for (let i = top; i <= bottom; i++) {
      // Add the element from the right column to result
      // Füge das Element aus der rechten Spalte zum Ergebnis hinzu
      result.push(array[i][right]);
    }
    // Move the right boundary left (we're done with this column)
    // Verschiebe die rechte Grenze nach links (wir sind mit dieser Spalte fertig)
    right = right - 1;

    // Step 3: Move LEFT along the bottom row (if there's still a row to process)
    // Schritt 3: Nach LINKS entlang der unteren Zeile bewegen (falls noch eine Zeile zu verarbeiten ist)
    // Check if we still have rows to process
    // Überprüfe, ob wir noch Zeilen zu verarbeiten haben
    if (top <= bottom) {
      // Loop from right boundary to left boundary (going backwards)
      // Schleife von rechter Grenze zu linker Grenze (rückwärts)
      for (let i = right; i >= left; i--) {
        // Add the element from the bottom row to result
        // Füge das Element aus der unteren Zeile zum Ergebnis hinzu
        result.push(array[bottom][i]);
      }
      // Move the bottom boundary up (we're done with this row)
      // Verschiebe die untere Grenze nach oben (wir sind mit dieser Zeile fertig)
      bottom = bottom - 1;
    }

    // Step 4: Move UP along the left column (if there's still a column to process)
    // Schritt 4: Nach OBEN entlang der linken Spalte bewegen (falls noch eine Spalte zu verarbeiten ist)
    // Check if we still have columns to process
    // Überprüfe, ob wir noch Spalten zu verarbeiten haben
    if (left <= right) {
      // Loop from bottom boundary to top boundary (going upwards)
      // Schleife von unterer Grenze zu oberer Grenze (aufwärts)
      for (let i = bottom; i >= top; i--) {
        // Add the element from the left column to result
        // Füge das Element aus der linken Spalte zum Ergebnis hinzu
        result.push(array[i][left]);
      }
      // Move the left boundary right (we're done with this column)
      // Verschiebe die linke Grenze nach rechts (wir sind mit dieser Spalte fertig)
      left = left + 1;
    }
  }

  // Return the final result array with all elements in snail order
  // Gib das endgültige Ergebnis-Array mit allen Elementen in Schnecken-Reihenfolge zurück
  return result;
}

// Test the function with examples
// Teste die Funktion mit Beispielen

// Example 1: 3x3 array
// Beispiel 1: 3x3 Array
console.log("Test 1:");
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// Expected output / Erwartete Ausgabe: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Example 2: 2x2 array
// Beispiel 2: 2x2 Array
console.log("Test 2:");
console.log(
  snail([
    [1, 2],
    [3, 4],
  ])
);
// Expected output / Erwartete Ausgabe: [1, 2, 4, 3]

// Example 3: 1x1 array
// Beispiel 3: 1x1 Array
console.log("Test 3:");
console.log(snail([[1]]));
// Expected output / Erwartete Ausgabe: [1]

// Example 4: 4x4 array
// Beispiel 4: 4x4 Array
console.log("Test 4:");
console.log(
  snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
// Expected output / Erwartete Ausgabe: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
