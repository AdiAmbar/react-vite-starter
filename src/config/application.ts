export const ApplicationURL = {
  production: "",
} as const;

export type ApplicationURL =
  (typeof ApplicationURL)[keyof typeof ApplicationURL];
