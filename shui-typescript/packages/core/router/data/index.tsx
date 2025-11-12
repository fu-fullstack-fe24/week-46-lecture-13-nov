import { createBrowserRouter } from "react-router-dom";
import { NotesPage } from '@shui/notespage';
import { AuthPage } from '@shui/authpage';
import { ProtectedRoute } from '@shui/protectedroute';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <ProtectedRoute />,
        children : [
            {
                path : '/',
                element : <NotesPage />
            },
            {
                path : '/notes',
                element : <NotesPage />
            }
        ]
    },
    {
        path : '/auth',
        element : <AuthPage />
    }
]);