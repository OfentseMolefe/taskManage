export interface Task {
    id ?: number;
    title: string;
    status: string;
    userEmail: string;
    description: string;
    completed: boolean;
    createdAt: string;
}

