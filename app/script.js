// 1 - gret funksiyasi
export const gret = (arr) => {
  try {
    if (!arr || arr.length === 0) throw new Error("Ism kiriting");
    return "hello " + arr;
  } catch (err) {
    return err.message;
  }
};

// 2 - son funksiyasi (optimallashtirilgan)
export function son(a) {
  try {
    if (typeof a !== "number" || isNaN(a)) {
      throw new Error("Bu son emas");
    }
    return a % 2 === 0 ? "juft" : "toq";
  } catch (err) {
    return err.message;
  }
}

// 3 chi masala
export function yigindi(a) {
  try {
    if (!Array.isArray(a)) {
      throw new Error("Bu massiv emas");
    }
    if (a.length == 0) {
      throw new Error("Massiv bo‘sh");
    }
    if (!a.every((son) => typeof son === "number")) {
      throw new Error("Massivda faqat sonlar bolishi kerak");
    }
    return a.reduce((sum, arry) => sum + arry, 0);
  } catch (xato) {
    return xato.message;
  }
}

// export function es(s) {
//   try {
//     return a.string("").reverse().join();
//   } catch {}
// }
