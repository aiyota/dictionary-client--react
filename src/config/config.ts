import assertEnvVar from "../utils";

export default function makeConfig() {
  assertEnvVar("REACT_APP_API_URL", process.env.REACT_APP_API_URL);
  return {
    apiUrl: process.env.REACT_APP_API_URL,
  };
}
