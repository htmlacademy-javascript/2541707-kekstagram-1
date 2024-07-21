/**
 * Функция проверки строки на палиндром
 * @param {string} string - изначальная строка для проверки
 * @return {boolean} - true палиндром, false - не палиндром
 */
const checkPalindrome = (string) =>
  string.toLowerCase().replace(/\s/g, '') === string.toLowerCase().replace(/\s/g, '').split("").reverse().join("");

/**
 * Функция извлечения целого числа из цифр в строке
 * @param {string} string - изначальная строка для извлечения
 * @return {number} - целое число
 */
const extractNumber = (string) =>
  +string.toString().match(/\d+/g).join("");

/**
 * Функция формирования адресов файлов
 * @param {string} string - исходная строка
 * @param {number} lengthstr - длинна строки
 * @param {string} symbol - исходная строка
 * @return {string} - адрес файла
 */
const creatingAddres = (string, lengthstr, symbol) =>
  string.length > lengthstr ? string : string.padStart(lengthstr, symbol);

/**
 * Функция проверки длинны строки
 * @param {string} string - изначальная строка для проверки
 * @param {number} lengthstr - длинна строки
 * @return {boolean} - true строка меньше или равно указанной длинне, false - строка длиннее
 */
const checkLengthStr = (string, lengthstr) =>
  string.length <= lengthstr;
