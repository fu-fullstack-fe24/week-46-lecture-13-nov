// ✅ Validera användarnamn
export const validateUsername = (username: string): string | null => {
    if (!/^[a-zA-Z0-9]{6,}$/.test(username)) {
        return "Username måste vara minst 6 tecken och bara bokstäver och siffror.";
    }
    return null;
};

// ✅ Validera lösenord och bekräftelse
export const validatePassword = (password: string, repeatPassword: string): string | null => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
        return "Lösenordet måste innehålla minst en stor bokstav, en liten bokstav och en siffra, och vara minst 8 tecken långt.";
    }
    if (password !== repeatPassword) {
        return "Lösenorden matchar inte.";
    }
    return null;
};

// ✅ Beräkna "time ago" i enklare format
export const timeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime(); // skillnad i millisekunder

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${seconds}s ago`;
};

// ✅ Returnerar en slumpmässig färg
export const getRandomColor = (): 'red' | 'yellow' | 'blue' | 'green' => {
    const colors = ['red', 'yellow', 'blue', 'green'] as const;
    return colors[Math.floor(Math.random() * colors.length)];
};

// ✅ Returnerar en slumpmässig rotationsriktning
export const getRotationDirection = (): 'right' | 'left' => {
    const directions = ['right', 'left'] as const;
    return directions[Math.floor(Math.random() * directions.length)];
};
