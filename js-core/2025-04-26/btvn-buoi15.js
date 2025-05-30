const colors = Array.from({ length: 20000 }, (_, i) => ({
    id: i + 1,
    name: `color ${i + 1}`
}));

const flowers = Array.from({ length: 400000 }, (_, i) => ({
    id: i + 1,
    name: `flower ${i + 1}`,
    colorId: Math.floor(Math.random() * 20000) + 1
}));

function binarySearch(array, targetId) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid].id === targetId) return array[mid];
        else if (array[mid].id < targetId) left = mid + 1;
        else right = mid - 1;
    }

    return null;
}

function binaryJoin(flowers, colors) {
    const result = [];
    for (const flower of flowers) {
        const matchedColor = binarySearch(colors, flower.colorId);
        if (matchedColor) {
            result.push({
                ...flower,
                colorName: matchedColor.name
            });
        }
    }
    return result;
}

function mergeJoin(flowers, colors) {
    // Cần sắp xếp cả 2 mảng theo colorId và id
    const sortedFlowers = [...flowers].sort((a, b) => a.colorId - b.colorId);
    const sortedColors = [...colors].sort((a, b) => a.id - b.id);

    const result = [];
    let i = 0;
    let j = 0;

    while (i < sortedFlowers.length && j < sortedColors.length) {
        const flower = sortedFlowers[i];
        const color = sortedColors[j];

        if (flower.colorId === color.id) {
            result.push({
                ...flower,
                colorName: color.name
            });
            i++;
        } else if (flower.colorId < color.id) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

console.time("Binary Search Join");
const joinedByBinary = binaryJoin(flowers, colors);
console.timeEnd("Binary Search Join");

console.time("Merge Join");
const joinedByMerge = mergeJoin(flowers, colors);
console.timeEnd("Merge Join");
