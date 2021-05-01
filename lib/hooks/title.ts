export default function useTitle(title: string): void {
    if (typeof window !== 'undefined') window.document.title = `Scrapbook | ${title}`;
}
