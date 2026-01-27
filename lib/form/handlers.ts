export async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    action: (input: string) => Promise<void>
): Promise<void>
{
    event.preventDefault();

    const button = event.currentTarget.elements.namedItem("submitButton") as HTMLButtonElement;

    button.textContent = "Sending...";
    button.disabled = true;

    try {
        await action("It's working!");
        button.textContent = "Sending successfully";
    }
    catch {
        button.textContent = "Error";
    }

    button.disabled = false;
}