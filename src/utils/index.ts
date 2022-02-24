import { SelectChangeEvent } from "@mui/material/Select";
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

export const makeSelectInputHandler =
  (setterFn: React.Dispatch<React.SetStateAction<string>>) =>
  (event: SelectChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setterFn(value);
  };
