export const RegisterCredentials = (p: Partial<RegisterCredentials> = {}): RegisterCredentials => ({
    email: "test1@ey.com",
    ...p
})