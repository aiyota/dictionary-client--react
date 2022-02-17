import { NoEnvVarException } from "./Exceptions";

export default function assertEnvVar(name: string, value: any) {
  if (!value) throw new NoEnvVarException(name);
}
