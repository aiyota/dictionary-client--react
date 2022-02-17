export class NoEnvVarException extends Error {
  constructor(varName: string) {
    super(
      `${varName} does not exist, please create a .env file that contains it`,
    );
  }
}
