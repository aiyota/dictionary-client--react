import { NoEnvVarException } from "./Exceptions";

export function assertEnvVar(name: string, value: any) {
  if (!value) throw new NoEnvVarException(name);
}

export const makeKeyboardInputHandler =
  (setterFn: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.KeyboardEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setterFn(value);
  };
