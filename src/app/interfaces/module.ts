export interface Module {
    id: number;
    title: string;
    size: number;
    description: string;
    author: string;
    joined?: boolean;
    progress?: number;
}
