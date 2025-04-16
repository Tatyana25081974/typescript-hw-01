function showMessage(message: string): void {
    console.log(message);
} //: void — функція нічого не повертає (лише виконує дію, наприклад, console.log).
       
function calc(num1: number, num2: number): number {
  return num1 + num2;
} //: number — функція повертає результат обчислення, тобто число

function customError(): never {
  throw new Error('Error');
}  //: never використовується для функцій, які завжди викидають вийняток або у нескінченних циклах. функція  customError викидає помилку і ніколи не повертає значення