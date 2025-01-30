import { Container } from "./Container";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <Container className="flex min-h-screen max-h-screen items-center justify-center ">{children}</Container>;
};