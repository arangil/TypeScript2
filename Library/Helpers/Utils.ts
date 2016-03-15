namespace Utils {
    export namespace CalculateUtil {
        export function Add(num1: number, num2: number): number {
            return num1 + num2;
        }
        export function Multiply(num1: number, num2: number): number {
            return num1 * num2;
        }
    }

    //Private function accessible only by Ultils namespace
    function LogMessage(message: string): void {
        console.log('Logged message :' + message);
    }
}