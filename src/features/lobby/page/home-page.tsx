import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HomePage = () => {
    return (
        <Container className="flex min-h-screen flex-col items-center justify-center">
            <h1>Lobby</h1>
            <div className="flex gap-4">
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
                <Link href="/register">
                    <Button>Register</Button>
                </Link>
            </div>
            <Link href="/dashboard">Dashboard</Link>
        </Container>
    )
};