"use client";

import { Button } from "react-bootstrap";

interface ErrorComponentProps {
    error: Error,
    reset: () => void
}

export default function Error ({error,reset}: ErrorComponentProps) {
    return(
        <>
            <div>
                <p>Error 😞</p>
            </div>
            <Button onClick={reset}>Try Again</Button>
        </>
    )
}